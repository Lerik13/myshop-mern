import express from 'express'
const router = express.Router()
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct, createProductReview, getTopProducts } from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import checkObjectId from '../middleware/checkObjectId.js';

router
	.route('/')
	.get(getProducts)
	.post(protect, admin, createProduct);

router.get('/top', getTopProducts);

router
	.route('/:id')
	.get(checkObjectId, getProductById)
	.delete(protect, admin, checkObjectId, deleteProduct)
	.put(protect, admin, checkObjectId, updateProduct);
	
router
	.route('/:id/reviews')
	.post(protect, checkObjectId, createProductReview);



export default router