import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setSort } from './actions';
import styled from 'styled-components';
import { FaFilter, FaSort } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const FilterAndSortContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const StyledInput = styled(animated.input)`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledSelect = styled(animated.select)`
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  option {
    background-color: #f8f8f8;
    color: red;
  }
`;

function FilterAndSort({ filter, sortBy, setFilter, setSort }) {
  const inputAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const selectAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500, delay: 200 },
  });

  return (
    <FilterAndSortContainer>
      <div>
        <FaFilter style={{ marginRight: '8px' }} />
        <StyledInput
          style={inputAnimation}
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div>
        <FaSort style={{ marginRight: '8px' }} />
        <StyledSelect
          style={selectAnimation}
          value={sortBy}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="" disabled hidden>
            Sort by
          </option>
          <option value="asc"> Asc</option>
          <option value="desc"> Desc</option>
        </StyledSelect>
      </div>
    </FilterAndSortContainer>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
  sortBy: state.sortBy,
});

const mapDispatchToProps = {
  setFilter,
  setSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAndSort);




