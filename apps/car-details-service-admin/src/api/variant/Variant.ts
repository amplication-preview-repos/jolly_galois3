import { CarReview } from "../carReview/CarReview";
import { CarSpecification } from "../carSpecification/CarSpecification";
import { Model } from "../model/Model";

export type Variant = {
  carReviews?: Array<CarReview>;
  carSpecifications?: Array<CarSpecification>;
  createdAt: Date;
  fuelType?: "Option1" | null;
  id: string;
  model?: Model | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
