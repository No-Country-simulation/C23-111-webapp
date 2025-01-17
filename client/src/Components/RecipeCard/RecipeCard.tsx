import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    styled,
    Drawer,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { FormEvent, useState } from "react";

type RecipeCardProps = {
    title: string;
    description: string;
    rate: number;
    totalRate: number;
    steps: number;
    ingredients: number;
};

const StyledCardContent = styled(CardContent)({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "10px 12px",
});

const StyledCard = styled(Card)({
    display: "flex",
    backgroundColor: "#fff",
    margin: "10px 0",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(1.1)",
        transition: "transform 0.2s ease",
    },
});

export const RecipeCard: React.FC<RecipeCardProps> = ({
    title,
    description,
    rate,
    totalRate,
    steps,
    ingredients,
}) => {
    const [open, setOpen] = useState(true);
    const [rating, setRating] = useState(2);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(true);
    const saveReview = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <>
            <StyledCard onClick={openDrawer}>
                <CardMedia
                    sx={{ width: "300px", height: "auto" }}
                    component="img"
                    image="/arroz-pollo.jpg"
                    alt="foto ilustrativa de arroz con pollo"
                />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "700px",
                    }}
                >
                    <StyledCardContent>
                        <Typography variant="h4">{title}</Typography>
                        <Rating readOnly value={rate} precision={0.5} /> (
                        {totalRate})
                    </StyledCardContent>

                    <StyledCardContent>
                        <Typography variant="body2">
                            📋 {steps} pasos
                        </Typography>
                        <Typography variant="body2">
                            🍴 {ingredients} ingredientes
                        </Typography>
                    </StyledCardContent>
                    <CardContent sx={{ padding: "10px 12px" }}>
                        <Typography variant="body1">{description}</Typography>
                    </CardContent>
                </Box>
            </StyledCard>
            <Drawer
                open={open}
                onClose={closeDrawer}
                anchor="right"
                sx={{
                    width: 370,
                    flexShrink: 0,
                    my: 2,
                    "& .MuiDrawer-paper": {
                        width: 370,
                        boxSizing: "border-box",
                    },
                }}
            >
                <div className="grid grid-cols-1 gap-y-3 p-0">
                    <div>
                        <img
                            src="https://picsum.photos/360"
                            alt=""
                            className="aspect-video"
                            width="353px"
                            height="198px"
                        />
                    </div>
                    <main className="px-2 flex flex-col gap-y-2">
                        <section className="flex justify-between items-center">
                            <h2 className="font-bold text-xl">Pollo barato</h2>
                            <p>
                                {rating} <StarIcon color="warning" />
                            </p>
                        </section>
                        <section>
                            <p className="font-semibold">Description</p>
                            <span className="text-gray-500 text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quia neque delectus sed
                                ratione veniam veritatis odit assumenda
                                praesentium
                            </span>
                        </section>
                        <section>
                            <p className="font-semibold">Ingredientes</p>

                            <ul className="list-disc">
                                <li>&#9679; Ingrediente 1</li>
                                <li>&#9679; Ingrediente 2</li>
                                <li>&#9679; Ingrediente 3</li>
                                <li>&#9679; Ingrediente 4</li>
                                <li>&#9679; Ingrediente 5</li>
                            </ul>
                        </section>
                        <section>
                            <p className="font-semibold">Pasos a seguir</p>
                            <div className="">
                                <p className="text-sm">Paso 1</p>
                                <span className="text-gray-500 text-sm">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Placeat quisquam dolorem
                                    ipsum!
                                </span>
                            </div>
                        </section>
                        <form
                            className="flex flex-col gap-y-2"
                            onSubmit={saveReview}
                        >
                            <p className="font-semibold text-center">
                                Que opinas
                            </p>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(Number(newValue));
                                }}
                            />
                            <textarea
                                name=""
                                id=""
                                className="border border-gray-500 rounded p-1"
                                placeholder="ta riko"
                            ></textarea>
                            <button className="bg-orange-400 my-2 text-white rounded p-2">
                                Enviar
                            </button>
                        </form>
                    </main>
                </div>
            </Drawer>
        </>
    );
};
