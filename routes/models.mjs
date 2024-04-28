import express from 'express';
import {MODELS, MODELS_MAP} from "../constant.mjs";

const router = express.Router();

/* GET models listing. */
router.get('/', function (req, res) {
    res.json(MODELS_MAP);
});

router.get("/tree-option", function (req, res) {
    res.json(MODELS);
});

export default router;