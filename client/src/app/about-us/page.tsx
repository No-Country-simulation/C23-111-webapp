// import { img } from "framer-motion/client";
import Image from "next/image";
import juanImg from "../../../public/img/juan-ramirez.jpg";
import leandroImg from "../../../public/img/leandro-schugurensky.jpg";

export default function AboutUs() {
    const compañeros = [
        {
            nombre: "Antonio Navarro",
            img: "https://github.com/anavarro81.png",
            linkedin:
                "https://www.linkedin.com/in/antonio-navarro-del-dujo-b16303164/",
            github: "https://github.com/anavarro81",
            rol: "Backend",
        },
        {
            nombre: "Juan Ramirez",
            img: juanImg,
            linkedin: "https://www.linkedin.com/in/juan-ramirez-490b84271/",
            github: "https://github.com/juanRCoder",
            rol: "Backend",
        },
        {
            nombre: "Leandro Schugurensky",
            img: leandroImg,
            linkedin: "https://www.linkedin.com/in/leanschugu/",
            github: "https://github.com/Schugu",
            rol: "Backend",
        },
        {
            nombre: "Dulce Nevarez",
            img: "https://github.com/DulceNev.png",
            linkedin:
                "https://www.linkedin.com/in/dulce-nevarez-castorena-396757269/",
            github: "https://github.com/DulceNev",
            rol: "Frontend",
        },
        {
            nombre: "Bruno Diaz",
            img: "https://github.com/BrunoDiaz7.png",
            linkedin: "https://www.linkedin.com/in/brunoleandrodiaz/",
            github: "https://github.com/BrunoDiaz7",
            rol: "Frontend",
        },
    ];

    return (
        <>
            <div className="flex items-center gap-5 w-full m-10">
                <div className="w-1/2">
                    <h1 className="font-bold text-3xl ">
                        Sobre <br />
                        nosotros
                    </h1>
                    <p>
                        Somos un grupo de estudiantes de Henry que decidimos
                        trabajar juntos en un proyecto de fin de módulo. Nos
                        especializamos en desarrollo web full stack y estamos
                        comprometidos con la calidad y la excelencia en nuestro
                        trabajo.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 w-2/5">
                    {compañeros.map((compañero) => {
                        return (
                            <div
                                key={compañero.nombre}
                                className="bg-red-200 w-44"
                            >
                                <Image
                                    src={compañero.img}
                                    alt={compañero.nombre}
                                    width={200}
                                    height={200}
                                    className="rounded-2xl"
                                />
                                <h2>{compañero.nombre}</h2>
                                <p>{compañero.rol}</p>
                                <div className="flex justify-between">
                                    <a href={compañero.linkedin}>Linkedin</a>
                                    <a href={compañero.github}>Github</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
