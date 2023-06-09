// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import yarnColorsSchema from "@/schemas/schema_yarn_color.json";
import yarnColors from "@/seeds/yarn_colors.seed.json";
import Ajv from "ajv/dist/2019";
import { JTDDataType } from "ajv/dist/jtd";
import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import NextCors from "nextjs-cors";

type Data = JTDDataType<
  typeof yarnColorsSchema | { errors: any }
>;
const ajv = new Ajv({
  strictTuples: false,
  allowUnionTypes: true,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const validate = ajv.compile<Data>(
    yarnColorsSchema
  );
  if (!validate(yarnColors)) {
    const { errors } = validate;
    return res.status(200).json({ errors });
  }

  res.status(200).json(yarnColors);
}
