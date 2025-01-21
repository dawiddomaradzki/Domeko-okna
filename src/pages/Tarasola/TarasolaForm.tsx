import axios from 'axios';
import { ErrorMessage, Form, Formik } from 'formik';
import { memo, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from 'styled-components';

import { TarasolaText } from '@/Global/components/commonComponents';
import HeaderWithLine from '@/Global/components/HeaderWithLine/HeaderWithLine';
import { COLOR, FONT_RESPONSIVE_SIZE, SCREEN_WIDTH } from '@/Global/globalStyles';
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

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? '#f59871' : provided.borderColor,
        boxShadow: state.isFocused ? '0 0 0 1px #f59871' : provided.boxShadow,
        '&:hover': {
            borderColor: '#f59871',
        },
    }),
    multiValue: provided => ({
        ...provided,
        backgroundColor: '#f59871',
    }),
    multiValueLabel: provided => ({
        ...provided,
        color: 'white',
    }),
    multiValueRemove: provided => ({
        ...provided,
        color: 'white',
        '&:hover': {
            backgroundColor: '#e06951',
            color: 'white',
        },
    }),
};

const TarasolaForm = ({ className }: TarasolaFormProps) => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const handleSubmit = async (submitValues: TemplateParams) => {
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                name: submitValues.name,
                number: submitValues.number,
                email: submitValues.email,
                type: submitValues.type?.value,
                construction: submitValues.construction?.value,
                sideConstruction: submitValues.sideConstruction
                    ? submitValues.sideConstruction.map(el => el.value).join()
                    : '',
                accessories: submitValues.accessories ? submitValues.accessories.map(el => el.value).join() : '',
                dimension: submitValues.dimension?.value,
                comments: submitValues.comments,
            },
        };

        try {
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            if (response.status === 200) {
                setIsFormSubmitted(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={className}>
            <HeaderWithLine text="Zapytaj o wycenę" />
            <Wrapper>
                <FormContainer>
                    {isFormSubmitted ? (
                        <TextWrapper>
                            <TarasolaText>
                                Dzękujęmy za wysłanie formularza. Nasz pracownik skontaktuje się odnośnie wyceny
                                najszybciej jak to możliwe 😊
                            </TarasolaText>
                        </TextWrapper>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ setFieldValue, values, isSubmitting, submitForm, isValid }) => {
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
                                                <StyledInput
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    value={values.email}
                                                    onChange={e => setFieldValue('email', e.target.value)}
                                                />
                                            </SelectWrapper>
                                            <StyledErrorMessage name="email" component="div" />
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
                                                    styles={customStyles}
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
                                                    styles={customStyles}
                                                />
                                            </SelectWrapper>
                                            <StyledErrorMessage name="type" component="div" />
                                        </Box>

                                        <Box>
                                            <SelectWrapper>
                                                <IconWrapper
                                                    onClick={() => scrollToSectionWithOffset('construction', 100)}
                                                >
                                                    <ArrowDownLogoSVG />
                                                </IconWrapper>
                                                <StyledSelect
                                                    name="construction"
                                                    placeholder="Wybierz typ konstrukcji"
                                                    options={constructions}
                                                    value={values.construction}
                                                    onChange={option => setFieldValue('construction', option)}
                                                    styles={customStyles}
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
                                                    components={animatedComponents}
                                                    value={values.sideConstruction}
                                                    onChange={option => setFieldValue('sideConstruction', option)}
                                                    isMulti
                                                    styles={customStyles}
                                                />
                                            </SelectWrapper>
                                            <StyledErrorMessage name="sideConstruction" component="div" />
                                        </Box>
                                        <Box>
                                            <SelectWrapper>
                                                <IconWrapper
                                                    onClick={() => scrollToSectionWithOffset('accessories', 100)}
                                                >
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
                                                    styles={customStyles}
                                                />
                                            </SelectWrapper>
                                            <StyledErrorMessage name="accessories" component="div" />
                                        </Box>
                                        <Box>
                                            <SelectWrapper>
                                                <HiddenIconWrapper />
                                                <StyledTextArea
                                                    name="comments"
                                                    placeholder="Uwagi"
                                                    value={values.comments}
                                                    onChange={e => setFieldValue('comments', e.target.value)}
                                                />
                                            </SelectWrapper>
                                        </Box>

                                        <ButtonContainer $disabled={isSubmitting || !isValid}>
                                            <SubmitButton onClick={submitForm} type="submit" disabled={isSubmitting}>
                                                Wyślij zapytanie
                                            </SubmitButton>
                                        </ButtonContainer>
                                    </Form>
                                );
                            }}
                        </Formik>
                    )}
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
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${SCREEN_WIDTH.s}) {
        padding: 0 1rem;
    }
`;

const Box = styled.div`
    padding-bottom: 1rem;
`;

const StyledSelect = styled(Select)`
    width: 100%;
`;

const SubmitButton = styled.button`
    width: 250px;
    border-radius: 6px;
    border: none;
    background-color: ${COLOR.deepCarrotOrange};
    padding: 10px;
    color: ${COLOR.ghostWhite};
    &:hover {
        background-color: ${COLOR.deepCarrotOrange};
        opacity: 90%;
        border-color: ${COLOR.deepCarrotOrange};
    }
`;

const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    height: 100%;
    object-fit: cover;
    max-width: 50vw;
    width: clamp(18.75rem, 50vw, 46.875rem);
    @media (max-width: ${SCREEN_WIDTH.s}) {
        display: none;
    }
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
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    @media (max-width: ${SCREEN_WIDTH.s}) {
        justify-content: center;
        align-items: center;
    }
`;

const ButtonContainer = styled.div<{ $disabled: boolean }>`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    @media (max-width: ${SCREEN_WIDTH.s}) {
        margin-top: 1rem;
    }

    button {
        cursor: ${props => (props?.$disabled ? 'not-allowed' : 'pointer')};
        &:disabled {
            background-color: #323234;
            opacity: 0.65;
            color: ${COLOR.ghostWhite};
        }
    }
`;

const FormContainer = styled.div`
    max-width: 900px;
    min-width: 450px;
    padding: 0 2rem;

    @media (max-width: ${SCREEN_WIDTH.s}) {
        justify-content: center;
        min-width: 350px;
        padding: 0;
    }
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
        border-color: #f59871;
        box-shadow: 0 0 0 1px #f59871;
    }

    &:hover {
        border-color: #f59871;
    }
`;
const StyledTextArea = styled.textarea`
    width: 100%;
    min-height: 74px;
    font-size: 1.2rem;
    padding: 2px 8px;
    outline: none;
    border: 1px solid hsl(0, 0%, 80%);
    box-sizing: border-box;
    border-radius: 5px;
    font: inherit;

    &:focus {
        border-color: #f59871;
        box-shadow: 0 0 0 1px #f59871;
    }

    &:hover {
        border-color: #f59871;
    }
`;
export default Styled;
