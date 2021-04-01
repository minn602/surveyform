import React from "react";
import styled from "styled-components";

const OptionFilter = ({ id, toggleInputType }) => {
  return (
    <Wrapper>
      <SelectOption
        onChange={(evt) => toggleInputType(evt, id)}
        name="convertOptionInput"
        id="optionfilter"
      >
        <option value="radio">다중 선택</option>
        <option value="checkbox">체크박스</option>
      </SelectOption>
    </Wrapper>
  );
};

export default OptionFilter;

const Wrapper = styled.div`
  background-color: #fff;
`;

const SelectOption = styled.select`
  background-color: #fff;
  margin-bottom: 14px;
`;
