import { Server } from "boardgame.io/server";
import { Beergammon } from "beergammon-game";

const server = Server({ games: [Beergammon] });
server.run(8000);
