"use client";

import React from "react";
import styled from "styled-components";

export const Component = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // MEMO: ここでフォームの内容を送信する処理を実装
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <SubWrap>
          <FormTitle>CONTACT</FormTitle>

          <TextLarge>Name</TextLarge>
          <InputArea
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <TextLarge>E-mail</TextLarge>
          <InputArea
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <TextLarge>お問い合わせする</TextLarge>
          <TextArea
            name="お問い合わせ内容を入力してください。（任意）"
            value={formData.message}
            onChange={handleChange}
          />
        </SubWrap>

        <Button type="submit">Submit</Button>
      </Form>
    </Wrap>
  );
};

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubWrap = styled.div`
  width: 100%;
  max-width: 585px;
  display: flex;
  flex-direction: column;
  background-color: #edebe9;
`;

// タイトルとテキストのフォントサイズを調整
const FormTitle = styled.h2`
  font-size: 21px;
  text-align: left;
  color: #000;
`;

const TextLarge = styled.p`
  color: #000;
  width: 100%;
  text-align: left;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const InputArea = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  color: #000;
  font-size: 21px;
  text-align: left;
`;

const TextArea = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  color: #000;
  font-size: 21px;
  text-align: left;
`;

const Button = styled.button`
  width: 167px;
  height: 46px;
  border: 1px solid #fff;
  color: #fff;
  background-color: #383838;
`;
