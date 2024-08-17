import mongoose, { Schema } from "mongoose";

const alimentsData = new Schema({
  'Food description': String,
  'Category description': String,
  'Energy (kcal)': Number,
  'Protein (g)': Number,
  'Carbohydrate (g)': Number,
  'Sugars, total (g)': Number,
  'Fiber, total dietary (g)': Number,
  'Total Fat (g)': Number,
});

export const aliment = mongoose.model('Aliment', alimentsData)

export const fieldsToInclude = {
  _id: false,
  'Food description': true,
  'Category description': true,
  'Energy (kcal)': true,
  'Protein (g)': true,
  'Carbohydrate (g)': true,
  'Sugars, total (g)': true,
  'Fiber, total dietary (g)': true,
  'Total Fat (g)': true,
};
