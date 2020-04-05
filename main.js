import { Server } from "boardgame.io/server";
import { Beergammon } from "beergammon-game";

const port = process.env.PORT || 8000;

const server = Server({ games: [Beergammon] });
server.run(port);
