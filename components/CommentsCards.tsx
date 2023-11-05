import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
type Props = {
  type: number;
  comment: string;
  score: number;
};
const CommentCards = ({ comment, score, type }: Props) => {
  const CircularProgressClassNames =
    type == 0
      ? {
          svg: "w-20 h-20 drop-shadow-md",
          indicator: "stroke-red-500",
          track: "stroke-black/20",
          value: "text-lg font-semibold text-red-500",
        }
      : type == 4
      ? {
          svg: "w-20 h-20 drop-shadow-md",
          indicator: "stroke-green-500",
          track: "stroke-black/20",
          value: "text-lg font-semibold text-green-500",
        }
      : {
          svg: "w-20 h-20 drop-shadow-md",
          indicator: "stroke-yellow-500",
          track: "stroke-black/20",
          value: "text-lg font-semibold text-yellow-500",
        };
  const ChipClassNames =
    type == 0
      ? {
          base: "border-1 border-white/6=80",
          content: "text-red-400 text-small font-semibold",
        }
      : type === 4
      ? {
          base: "border-1 border-white/6=80",
          content: "text-green-400 text-small font-semibold",
        }
      : {
          base: "border-1 border-white/6=80",
          content: "text-yellow-400 text-small font-semibold",
        };
  return (
    <Card className="w-[300px] h-[350px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          aria-label="true"
          classNames={CircularProgressClassNames}
          value={score}
          strokeWidth={4}
          showValueLabel={true}
        />
        <Divider orientation="horizontal" className="my-2" />
        <ScrollShadow className="w-full h-full">
          <p className="ml-10 w-[60%] font-medium text-white sm:text-xl">
            {comment}
          </p>
        </ScrollShadow>
      </CardBody>
      <CardFooter className=" justify-center items-center pt-0">
        <Chip classNames={ChipClassNames} variant="bordered">
          {type == 0 ? "Negative" : type == 2 ? "Neutral" : "Postive"}
        </Chip>
      </CardFooter>
    </Card>
  );
};

export default CommentCards;
