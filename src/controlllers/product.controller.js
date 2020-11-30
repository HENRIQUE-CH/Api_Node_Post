const db = require("../config/database");
const pg = require('pg');




module.exports = {

    //Metado resposanvel pela listagem individual
    async listaProduto(req, res) {
        const mat_001 = parseInt(req.params.id);

        const response = await db.query(
            "SELECT mat_001, mat_003, mat_008, mat_016 FROM materiais WHERE mat_001 = $1 ORDER BY mat_003", [mat_001]
        )
        if (req.params.id != mat_001) {

            console.log("Produto nao encontrado");
        }
        res.status(200).send(response.rows);
    },

    //Metado resposanvel pela listagem individual
    async listaTodosProdutos(req, res) {
        const response = await db.query(
            "SELECT mat_001, mat_003, mat_008, mat_016 FROM materiais  ORDER BY mat_003"
        );
        res.status(200).send(response.rows);
    },



    //Metodo responsavel pela atualização do estoque
    async updateEstoque(req, res) {
        const mat_001 = parseInt(req.params.id);
        const { mat_016 } = req.body;

        const response = await db.query(
            "UPDATE MATERIAIS SET mat_016 =$1 WHERE mat_001 =$2", [mat_016, mat_001]
        )

        res.status(200).send({ messange: "Atualizado!" });

    },

    //Metodo responsavel pela atualização do preço
    async updatePreco(req, res) {
        const mat_001 = parseInt(req.params.id);
        const { mat_008 } = req.body;

        const response = await db.query(
            "UPDATE MATERIAIS SET mat_008 =$3 WHERE mat_001 =$4", [mat_008, mat_001]
        )

        res.status(200).send({ messange: "Preço atualizado!" });

    },
};