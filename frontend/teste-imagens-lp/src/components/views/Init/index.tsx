import React from "react";
import axios, { isAxiosError } from "axios";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import Button from "../../Button";
import Spacer from "../../Spacer";

import { backendUrl } from "../../../utils/utils";
import * as S from "./styles";

const InitView: React.FC = () => {
  const addData = async () => {
    try {
      const response = await axios.post(backendUrl + `/images/insertAllImages`);

      if (response.status === 200) {
        toast.success("Dados inseridos com sucesso!");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 406) {
          toast.error("Erro! O banco já possui os dados cadastrados!");
        }
        return;
      }
      toast.error("Erro interno");
    }
  };

  const removeData = async () => {
    try {
      const response = await axios.delete(
        backendUrl + `/images/deleteAllImages`
      );
      if (response.status === 200) {
        toast.success("Dados removidos com sucesso!");
      } else {
        toast.error("O banco já está limpo!");
      }
    } catch (error) {
      toast.error("Erro interno");
    }
  };

  return (
    <S.Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h1>Teste de Imagens</h1>
      <Spacer height={25} />
      <Button title="Adicionar imagens" onClick={addData} />
      <Spacer height={50} />
      <Button title="Remover imagens" onClick={removeData} />
      <Spacer height={50} />
      <a href="/main" style={{ textDecoration: "none" }}>
        <Button title="Ver álbuns cadastrados" />
      </a>
    </S.Container>
  );
};

export default InitView;
