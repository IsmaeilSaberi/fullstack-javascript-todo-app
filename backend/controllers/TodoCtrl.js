const Todo = require("../models/Todo");

const addTodo = async (req, res) => {
  try {
    // const { name, completed } = req.body;
    // const todoData = { name, completed };
    // const newTodo = new Todo(todoData);
    // console.log(req.body);
    // await newTodo.save();

    // گرفتن اطلاعات از بدنه درخواستی که فرستاده شده
    const data = req.body;
    // ایجاد یک تودوی جدید در دیتابیس بر اساس این اطلاعاتی که گرفتیم
    await Todo.create(data);

    res.status(200).json({ message: "Todo added successfullty" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports.addTodo = addTodo;
