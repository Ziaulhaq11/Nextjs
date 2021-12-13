import { articles } from "../../../data";

export default function handler(req, res) {
    const id = req.query.id
    const filtered = articles.filter(article => article.id === id)
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]); //Because in array we have object so we have to pass the first element of it. Otherwise we have to write this in frontend
    } else {
        res.status(404).json({msg : 'Page is not found'})
    }
}
