import {articles} from '../../../data'

//In the url we can simply type localhost:3000/api/articles and you will get this data just like express
export default function handler(req, res) {
    res.status(200).json(articles)
}