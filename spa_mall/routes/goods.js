const express = require("express");
const Goods = require("../schemas/goods")
const Cart = require("../schemas/cart");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("this is root page");
});

router.get("/goods", async (req, res) => {
    const { category } = req.query;

    const goods = await Goods.find({ category });

    res.json({
        goods,
    });
});

router.get("/goods/:goodsId", async (req, res) => {
    const {goodsId} = req.params;

    const [goods] = await Goods.find({ goodsId: Number(goodsId) });

    res.json({
        goods,
    });
});

router.post("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;
    const { quantity } = req.body;

    const existCarts = await Cart.find({ goodsId: Number(goodsId) });
    if (existCarts.length) {
        return res.status(400).json({ success: false, errorMessage: "이미 장바구니에 들어있는 상품입니다." });
    }

    await Cart.create({ goodsId: Number(goodsId), quantity });
    res.json({ success: true });
});

router.delete("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;

    const existCarts = await Cart.find({ goodsId: Number(goodsId) });
    if (existCarts.length) {
        await Cart.deleteOne({ goodsId: Number(goodsId) });
    }

    res.json({ success: true });
});

router.put("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;
    const { quantity } = req.body;

    if(quantity < 1) {
        res.status(400).json({ errorMessage: "수량을 잘못 입력하셨습니다. 수량은 1 이상으로 입력해주세요." });
        return;
    }

    const existCarts = await Cart.find({ goodsId: Number(goodsId) });
    if (existCarts.length) {
        await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } });
    }

    res.json({ success: true });
});

router.post("/goods", async (req, res) => {
	const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });
  if (goods.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  res.json({ goods: createdGoods });
});

module.exports = router;