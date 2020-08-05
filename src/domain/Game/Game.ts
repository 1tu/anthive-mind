import { IInput } from '@domain/Game';
import { configure } from 'mobx';
import { Root } from '@domain/Root';

configure({ computedRequiresReaction: true });

export enum EGameEvent {
  NONE = 'no_action',
  BIRTH = 'birth',
  DEATH = 'death',
  SLOW = 'slow',

  ERROR = 'error',
  ERROR_MOVE = 'bad_move',
  ERROR_UNLOAD = 'bad_unload',
  ERROR_EAT = 'bad_eat',
}

export class Game {
  private _root = new Root();

  constructor(port: number) {
    if (!IS_DEV) {
      const http = require('http');
      http
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .createServer((req: any, res: any) => {
          res.writeHead(200, {
            'Content-Type': 'application/json',
          });
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk: string) => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                const data = JSON.parse(body);
                const orders = this.handleData(data);
                res.end(JSON.stringify({ orders }));
                console.log('Tick:', data.tick, orders);
              } catch (error) {
                res.end('parse data error');
                console.log('parse error:', error.message);
              }
            });
          } else {
            res.end('only POST allowed');
          }
        })
        .listen(port);
    }
  }

  handleData = (data: IInput) => this._root.input(data);
}
