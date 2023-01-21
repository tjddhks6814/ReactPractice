import React, { createContext, useState } from "react"
// useContext란 보통은 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 데이터를 전달
// useContext를 사용하면 전역적으로 데이터를 공유가 가능해 root에서 최하위 컴포난트까지
// 데이터 전달이 가능하다
// 전역 상태관리
export const userName = createContext<string>('서성완');
export const userAge = createContext<number>(28);