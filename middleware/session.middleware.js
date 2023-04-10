import shortId from "shortid";
import db from "../db.js";

export default function sessionMiddleware(req, res, next) {
  if (!req.signedCookies.sessionId) {
    var sessionId = shortId.generate();
    res.cookie("sessionId", sessionId, { signed: true }); //server trả về sessionId
    db.get('sessions')
      .push({
        id:sessionId
      })
      .write(); // lưu sessionId với key 'id' trong mảng sessions
  }
  next();
}
