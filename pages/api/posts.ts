import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET":
      res.json({ ok: true });
      break;
    default:
      res.status(404).send("Not Found");
  }
};

export default handler;
