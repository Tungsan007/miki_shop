import connectMongo from 'src/utils/dbConnect';
import Feedback from 'src/models/Feedback';

async function deleteFeedback(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'DELETE') {
    try {
      const idFeedback = req.body.id;
      await Feedback.findByIdAndDelete(idFeedback);
      await Feedback.deleteMany({ repId: idFeedback });
      res.status(200).json('remove success');
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default deleteFeedback;
