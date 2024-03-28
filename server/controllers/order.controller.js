import orderModel from "../models/order.model.js";
import expressAsyncHandler from "express-async-handler";
import productModel from "../models/product.model.js";

// @desc Create order
// @router POST /api/shop/orders
// @access Private

const createOrder = expressAsyncHandler(async (req, res) => {
  try {
    const { orderItem, subTotalPrice, totalPrice } = req.body;

    const order = new orderModel({
      orderItem,
      subTotalPrice,
      totalPrice,
      user: req.user._id,
    });
    //reduce stock of ordered products
    orderItem.foreach(async (item) => {
      const product = await productModel.findById(item.product);
      product.stock = product.stock - item.qty;
      await product.save();
    });
    const createdOrder = await order.save();
    // send to client order
    res.status(201).json(createOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc get user order
// @router GET /api/shop/orders
// @access Private

const getUserOrders = expressAsyncHandler(async (req, res) => {
  try {
    const orders = await orderModel
      .find({ user: req.user._id })
      .sort({ createdAt: -1 }); // get new orders
    //get total order
    const totalOrders = await orderModel.countDocument({ user: req.user._id });
    //get pending order
    const pendingOrder = await orderModel.countDocument({
      user: req.user._id,
      "payment.status": "pending",
    });
    //get completed order
    const completedOrder = await orderModel.countDocument({
      user: req.user._id,
      "payment.status": "completed",
    });
    //get completed order
    const cancelledOrder = await orderModel.countDocument({
      user: req.user._id,
      "payment.status": "cancelled",
    });
    // send response to client
    res.json({
      orders,
      total: totalOrders,
      pending: pendingOrder,
      completed: completedOrder,
      cancelled: cancelledOrder,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc delete order by id
// @router DELETE /api/shop/orders/:id
// @access Private

const deletedOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = await orderModel.findByIdAndDelete(req.params.id);
    if (order) {
      res.json({ message: "Order removed" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc get order by id
// @router GET /api/shop/orders/:id
// @access Private

const getOrder = expressAsyncHandler(async (req, res) => {
  try {
    const order = await orderModel
      .findById(req.params.id)
      .populate("user", "fullName email phone");
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc delete orders
// @router DELETE /api/shop/orders
// @access Private

const deleteAllOrder = expressAsyncHandler(async (req, res) => {
  try {
    await orderModel.deleteMany({ user: req.user._id });
    // send response to client
    res.json({ message: "Orders removed" });
  } catch (error) {
    res.status(400).message({ message: error.message });
  }
});

// export
export { createOrder, getUserOrders, deletedOrder, getOrder, deleteAllOrder };
