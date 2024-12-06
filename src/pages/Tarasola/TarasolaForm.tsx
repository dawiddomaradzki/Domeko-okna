import axios from 'axios';
import { ErrorMessage, Form, Formik } from 'formik';
import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from 'styled-components';

// import { MainHeader } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
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
    TemplateParams,
    types,
    validationSchema,
} from './tarasolaFormUtilities';

interface TarasolaFormProps {
    className?: string;
}

const animatedComponents = makeAnimated();

const serviceId = 'service_jzyr924';
const templateId = 'template_acxbkez';
const publicKey = 'tskOpjuQziZcR_NCz';

const TarasolaForm = ({ className }: TarasolaFormProps) => {
    const handleSubmit = async (submitValues: TemplateParams) => {
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                name: submitValues.name,
                number: submitValues.number,
                type: submitValues.type?.value,
                construction: submitValues.construction?.value,
                sideConstruction: submitValues.sideConstruction?.value,
                accessories: submitValues.accessories ? submitValues.accessories.map(el => el.value).join() : '',
                dimension: submitValues.dimension?.value,
            },
        };

        // console.log(`%cdata`, `color: #E45EE4`, data);
        try {
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(`%cresponse.data`, `color: #ffa500`, response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={className}>
            <HeaderWithLine text="Zapytaj o wycenę" />
            <Wrapper>
                <FormContainer>
                    {/* <HeaderContainer>
                        <MainHeader>Skontaktuj się z nami</MainHeader>
                    </HeaderContainer> */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        // onSubmit={(values, actions) => {
                        //     console.log({ values, actions });
                        //     handleSubmit(values);
                        // }}
                    >
                        {({ setFieldValue, values, isSubmitting, submitForm }) => {
                            console.log(`%cvalues`, `color: #2EFF2E`, values);
                            return (
                                <Form>
                                    <Box>
                                        <SelectWrapper>
                                            <HiddenIconWrapper />
                                            <StyledInput
                                                name="name"
                                                placeholder="Imię"
                                                value={values.name}
                                                onChange={e => setFieldValue('name', e.target.value)}
                                            />
                                        </SelectWrapper>
                                        <StyledErrorMessage name="name" component="div" />
                                    </Box>
                                    <Box>
                                        <SelectWrapper>
                                            <HiddenIconWrapper />
                                            <StyledInput
                                                name="number"
                                                type="tel"
                                                placeholder="Numer telefonu"
                                                value={values.number}
                                                onChange={e => setFieldValue('number', e.target.value)}
                                            />
                                        </SelectWrapper>
                                        <StyledErrorMessage name="number" component="div" />
                                    </Box>
                                    <Box>
                                        <SelectWrapper>
                                            <HiddenIconWrapper />
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
                                        <Button
                                            onClick={submitForm}
                                            type="submit"
                                            variant="primary"
                                            disabled={isSubmitting}
                                        >
                                            Wyślij zapytanie
                                        </Button>
                                    </ButtonContainer>
                                </Form>
                            );
                        }}
                    </Formik>
                </FormContainer>
                <div>
                    <Image src={backgroundForm} alt="tarasola logo" />
                </div>
            </Wrapper>
        </div>
    );
};

const Memoized = memo(TarasolaForm);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    /* padding-top: 5rem; */
`;

const HeaderContainer = styled.div`
    margin-bottom: 1rem;
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

const HiddenIconWrapper = styled.div`
    width: 39px;
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

const StyledInput = styled.input`
    width: 100%;
    height: 38px;
    font-size: 1.2rem;
    padding: 2px 8px;
    outline: none;
    border: 1px solid hsl(0, 0%, 80%);
    box-sizing: border-box;
    border-radius: 5px;
    font: inherit;

    &:focus {
        border-color: #2684ff;
        box-shadow: 0 0 0 1px #2684ff;
    }

    &:hover {
        border-color: hsl(0, 0%, 70%);
    }
`;
export default Styled;
