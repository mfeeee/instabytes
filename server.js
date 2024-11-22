import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato preguiçoso tomando sol",
    imagem: "https://placekitten.com/400/200",
  },
  {
    id: 3,
    descricao: "Gatinho curioso explorando a caixa",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 4,
    descricao: "Dois gatinhos brincando",
    imagem: "https://placekitten.com/300/300",
  },
  {
    id: 5,
    descricao: "Gata majestosa olhando pela janela",
    imagem: "https://placekitten.com/500/300",
  },
  {
    id: 6,
    descricao: "Gatinho ronronando no colo",
    imagem: "https://placekitten.com/200/200",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) =>{
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});