import Post from './post.model';
import dbConnect from '../../../utils/db';

dbConnect();

export default async function (req, res) {
	const METHOD = req.method;
	switch (METHOD) {
		case 'GET':
			try {
				console.log('IN GET');
				const docs = await Post.find().exec();
				res.status(200).json({ success: 'true', data: docs });
			} catch (error) {
				res.status(404).json({ errors: error });
			}
			break;
		// case 'POST':
		// 	try {
		// 		const doc = await Post.create({
		// 			...req.body,
		// 		});
		// 		console.log(doc);
		// 		if (!doc) {
		// 			res.status(201).json({
		// 				success: 'true',
		// 				data: 'could Not be created',
		// 			});
		// 		}
		// 		res.status(201).json({ success: 'true', data: doc });
		// 	} catch (error) {
		// 		res.status(401).json({ error: error });
		// 	}
		// 	break;
		default:
			res.status(404).json({ success: 'true', data: 'error' });
			break;
	}
}
