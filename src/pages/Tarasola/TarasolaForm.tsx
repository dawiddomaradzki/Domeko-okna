import { ErrorMessage, Form, Formik } from 'formik';
import React, { memo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Select, { ActionMeta, SingleValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from 'styled-components';

import { MainHeader } from '@/Global/components/commonComponents';
import { COLOR, FONT_RESPONSIVE_SIZE } from '@/Global/globalStyles';
import { ReactComponent as ArrowDownLogoSVG } from '@/resources/Icons/arrow-down.svg';
import backgroundForm from '@/resources/Images/Tarasola/backgroundForm.webp';
import { scrollToSectionWithOffset } from '@/utils/scrollTo';

import {
    accessories,
    constructions,
    dimensions,
    initialValues,
    sideConstructions,
    types,
    validationSchema,
} from './tarasolaFormUtilities';

interface TarasolaFormProps {
    className?: string;
}

type Option = {
    value: string;
    label: string;
};

const animatedComponents = makeAnimated();

const TarasolaForm = ({ className }: TarasolaFormProps) => {
    const [formData, setFormData] = useState(initialValues);

    const handleSubmit = (submitValues: typeof initialValues) => {
        console.log(submitValues);
    };

    const handleSelectChange = (option: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
        console.log(`%cevent`, `color: #ffa500`, option, actionMeta);
        setFormData(prevState => ({
            ...prevState,
            [`${actionMeta.name}`]: option?.value,
        }));
    };
    // const handleSelectChange = (fieldType: string, selectedOption: Option | null) => {
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [fieldType]: selectedOption?.value,
    //     }));
    // };

    console.log(`%cformData`, `color: #E45EE4`, formData);
    return (
        <div className={className}>
            <Wrapper>
                <FormContainer>
                    <HeaderContainer>
                        <MainHeader>Skontaktuj się z nami</MainHeader>
                    </HeaderContainer>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            console.log({ values, actions });
                        }}
                    >
                        {({ setFieldValue, values }) => {
                            console.log(`%cvalues`, `color: #2EFF2E`, values);
                            return (
                                <Form>
                                    <Box>
                                        <SelectWrapper>
                                            <IconWrapper onClick={() => scrollToSectionWithOffset('type', 100)}>
                                                <ArrowDownLogoSVG />
                                            </IconWrapper>
                                            <StyledSelect
                                                name="type"
                                                placeholder="Wybierz konstrukcję"
                                                options={types}
                                                value={values.type}
                                                onChange={option => setFieldValue('type', option)}
                                            />
                                        </SelectWrapper>
                                        <StyledErrorMessage name="type" component="div" />
                                    </Box>
                                    <Box>
                                        <SelectWrapper>
                                            <IconWrapper>
                                                <ArrowDownLogoSVG />
                                            </IconWrapper>
                                            <StyledSelect
                                                name="dimension"
                                                placeholder="Wybierz wymiar"
                                                options={dimensions}
                                                value={values.dimension}
                                                onChange={option => setFieldValue('dimension', option)}
                                            />
                                        </SelectWrapper>
                                        <StyledErrorMessage name="dimension" component="div" />
                                    </Box>
                                    <Box>
                                        <SelectWrapper>
                                            <IconWrapper onClick={() => scrollToSectionWithOffset('construction', 100)}>
                                                <ArrowDownLogoSVG />
                                            </IconWrapper>
                                            <StyledSelect
                                                name="construction"
                                                placeholder="Wybierz typ konstrukcji"
                                                options={constructions}
                                                value={values.construction}
                                                onChange={option => setFieldValue('construction', option)}
                                            />
                                        </SelectWrapper>
                                        <StyledErrorMessage name="construction" component="div" />
                                    </Box>
                                    <Box>
                                        <SelectWrapper>
                                            <IconWrapper
                                                onClick={() => scrollToSectionWithOffset('sideConstruction', 100)}
                                            >
                                                <ArrowDownLogoSVG />
                                            </IconWrapper>
                                            <StyledSelect
                                                name="sideConstruction"
                                                placeholder="Wybierz konstrukcję boczną"
                                                options={sideConstructions}
                                                value={values.sideConstruction}
                                                onChange={option => setFieldValue('sideConstruction', option)}
                                            />
                                        </SelectWrapper>
                                        <StyledErrorMessage name="sideConstruction" component="div" />
                                    </Box>
                                    <Box>
                                        <SelectWrapper>
                                            <IconWrapper onClick={() => scrollToSectionWithOffset('accessories', 100)}>
                                                <ArrowDownLogoSVG />
                                            </IconWrapper>
                                            <StyledSelect
                                                name="accessories"
                                                placeholder="Wybierz akcesoria"
                                                components={animatedComponents}
                                                options={accessories}
                                                value={values.accessories}
                                                onChange={option => setFieldValue('accessories', option)}
                                                isMulti
                                            />
                                        </SelectWrapper>
                                        <StyledErrorMessage name="accessories" component="div" />
                                    </Box>
                                    <ButtonContainer>
                                        <Button type="submit" variant="primary">
                                            Wyślij zapytanie
                                        </Button>
                                    </ButtonContainer>
                                </Form>
                            );
                        }}
                        {/* <Select
                    value={selectedType}
                    onChange={selectedOption => handleChange(selectedOption, setSelectedType)}
                    options={rodzaj}
                />
                <Button variant="primary">Wyślij zapytanie</Button> */}
                    </Formik>
                </FormContainer>
                <div>
                    <Image src={backgroundForm} alt="tarasola logo" />
                </div>
                {/* <ImageContainer /> */}
            </Wrapper>
        </div>
    );
};

const Memoized = memo(TarasolaForm);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    padding-top: 5rem;
`;

const HeaderContainer = styled.div`
    margin-bottom: 3rem;
`;

const Box = styled.div`
    padding-bottom: 1rem;
`;

const StyledSelect = styled(Select)`
    width: 100%;
`;
const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    width: 50vw;
    max-height: 500px;
`;
const IconWrapper = styled.div`
    padding-right: 1rem;
    & svg {
        height: 25px;
        transform: scaleX(-1);
        cursor: pointer;
    }

    &:hover {
        & svg {
            fill: ${COLOR.deepCarrotOrange};
            transition: fill 0.3s ease;
        }
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;

const FormContainer = styled.div`
    max-width: 800px;
    min-width: 450px;
    padding: 0 2rem;
`;
const StyledErrorMessage = styled(ErrorMessage)`
    padding: 0.3rem 0 0 0.3rem;
    margin-left: 2rem;
    color: red;
    font-size: ${FONT_RESPONSIVE_SIZE.errorMessage};
`;
export default Styled;
