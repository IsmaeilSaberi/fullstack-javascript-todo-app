const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  completed: {
    required: true,
    type: Boolean,
  },
});

// بررسی می کند که در دیتابیسمان مدلی مثل اینی که ایجاد کردیم هست یا نه اگر نیست یکی ایجاد می کنه
const TodoModel = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
