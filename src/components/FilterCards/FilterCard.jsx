import styled from "styled-components";
import * as TogglePrimitive from "@radix-ui/react-toggle-group";
import { colors } from "../../themes";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function FilterCard(params) {
  const companyData = useSelector(state => state.companies)
  const tagsData = useSelector(state => state.tags)

  const [company, setCompany] = useState(companyData)
  const [tags, setTags] = useState(tagsData)
  const [brandOption, setBrandOption] = useState([['*']])

  useEffect(() => {
    setCompany(companyData);
  }, [companyData]);

  useEffect(() => {
    setTags(tagsData);
  }, [tagsData]);

  if (company?.data?.data && !company?.data?.data.find(e => e.name === 'All')) {
    company.data.data.unshift({ name: "All", slug: "All", account: "*" })
  }
  if (tags?.data?.data && !tags?.data?.data.find(e => e.name === 'All')) {
    tags.data.data.unshift({ name: "All", slug: "All", account: "*" })
  }

  const onBrandChange = (value) => {
    if (value.length == 0) {
      params.onChange(["All"])
      setBrandOption(["All"])
    }
    if (value.includes("All") && value.length == 1) {
      params.onChange(["*"])
      setBrandOption(["*"])
    } else {
      value = value.filter(item => item != "All")
      params.onChange(value)
      setBrandOption(value)
    }
  }

  const handleSearchBrands = (value) => {
    let searchBrand = company
    searchBrand.data.data = company.data.data.filter(x => x.slug.toLowerCase().includes(value))
    setCompany(searchBrand)
  };

  const handleSearchTags = (value) => {
    let searchBrand = tags
    searchBrand.data.data = tags.data.data.filter(x => x.slug.toLowerCase().includes(value))
    setTags(searchBrand)
  };
  return (
    <FilterWrapper>
      <FilterTitle>{params.title}</FilterTitle>

      <FilterCardWrapper>
        <Input
          placeholder={params.placeholder}
          onChange={e => params.title == "Brands" ? handleSearchBrands(e.target.value) : handleSearchTags(e.target.value)}
        />
        {
          params.title == "Brands" && company && !company?.loading && company?.data?.data?.length > 0 && (
            <ToggleRoot
              type="multiple"
              defaultValue={params.default}
              onValueChange={onBrandChange}
            >
              {company.data.data.map(option => (
                <ToggleItem key={option.account} value={option.slug}>
                  <IconCircle>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L3.5 6 1 3.727"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconCircle>

                  <span>{option.name}</span>
                </ToggleItem>
              ))}
            </ToggleRoot>
          )
        }
        {params.title == "Tags" && tags && !tags?.loading && tags?.data?.data?.length > 0 && (
          <ToggleRoot
            type="multiple"
            defaultValue={params.default}
            onValueChange={params.onChange}
          >
            {tags.data.data.map(option => (
              <ToggleItem key={option.account} value={option.slug}>
                <IconCircle>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L3.5 6 1 3.727"
                      stroke="currentColor"
                      strokeWidth={1.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IconCircle>

                <span>{option.name}</span>
              </ToggleItem>
            ))}
          </ToggleRoot>
        )}
      </FilterCardWrapper>
    </FilterWrapper>
  );
}

export default FilterCard


const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 608px;
  margin-bottom: 4%
`;

const FilterTitle = styled.h4`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.gray500};
  text-align: left;
`;

const FilterCardWrapper = styled.div`
  padding: 24px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  height: 244px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  color: ${colors.gray500};
  width: 100%;

  &::placeholder {
    font-family: Inter, "Open Sans", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.gray300};
  }
`;

const IconCircle = styled.div`
  background-color: white;
  box-shadow: 0px 1px 7px 0px #5d38c066;
  border-radius: 2px;
  font-size: 22px;
  width: 1em;
  height: 1em;
  display: grid;
  place-items: center;

  svg {
    font-size: 10px;
    color: white;
    display: none;
  }
`;

const ToggleRoot = styled(TogglePrimitive.Root)`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 18px;

  padding-left: 5px;
`;

const ToggleItem = styled(TogglePrimitive.Item)`
  appearance: none;
  border: none;
  background: none;
  width: max-content;

  display: flex;
  gap: 8px;
  align-items: center;

  &[data-state="on"] {
    ${IconCircle} {
      background-color: ${colors.primary};

      svg {
        display: block;
      }
    }
  }

  span {
    font-size: 14px;
    line-height: 18px;
    color: ${colors.gray600};
  }
`;