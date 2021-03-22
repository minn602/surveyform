import React from "react";
import styled from "styled-components";

export const OptionFilter = ({ toggleInputType }) => {
  return (
    <Wrapper>
      <SelectOption
        onChange={toggleInputType}
        name="convertOptionInput"
        id="optionfilter"
      >
        <option value="radio">다중 선택</option>
        <option value="checkbox">체크박스</option>
      </SelectOption>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
`;

const SelectOption = styled.select`
  background-color: #fff;
  margin-bottom: 14px;
`;
