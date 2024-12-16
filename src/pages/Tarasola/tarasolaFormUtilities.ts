import * as Yup from 'yup';

export const types = [
    { value: 'Technic Pro - Dach lamelowy', label: 'Technic Pro - Dach lamelowy' },
    { value: 'Cubic – Dach tkaninowy', label: 'Cubic – Dach tkaninowy' },
    { value: 'FIX - Dach stały poliwęglan', label: 'FIX - Dach stały poliwęglan' },
    { value: 'Carport – Dach stały blacha trapezowa', label: 'Carport – Dach stały blacha trapezowa' },
];

export const dimensions = [
    { value: '300 x 400', label: '300 x 400' },
    { value: '300 x 450', label: '300 x 450' },
    { value: '300 x 500', label: '300 x 500' },
    { value: '300 x 550', label: '300 x 550' },
    { value: '300 x 600', label: '300 x 600' },
    { value: '400 x 400', label: '400 x 400' },
    { value: '400 x 450', label: '400 x 450' },
    { value: '400 x 500', label: '400 x 500' },
    { value: '400 x 550', label: '400 x 550' },
    { value: '400 x 600', label: '400 x 600' },
    { value: 'Inny wymiar', label: 'Inny wymiar' },
];

export const constructions = [
    { value: 'Wolnostojąca', label: 'Wolnostojąca' },
    { value: 'Przyścienna', label: 'Przyścienna' },
];

export const sideConstructions = [
    { value: 'Przeszklenia', label: 'Przeszklenia' },
    { value: 'Shutters', label: 'Shutters' },
    { value: 'Roleta ZIP', label: 'Roleta ZIP' },
    { value: 'Panel stały', label: 'Panel stały' },
];

export const accessories = [
    { value: 'Promenniki ciepła', label: 'Promenniki ciepła' },
    { value: 'Oświetlenie LED białe – listwa po obwodzie', label: 'Oświetlenie LED białe – listwa po obwodzie' },
    { value: 'Oświetlenie LED RGB – listwa po obwodzie', label: 'Oświetlenie LED RGB – listwa po obwodzie' },
    { value: 'Oświetlenie LED na suficie spot', label: 'Oświetlenie LED na suficie spot' },
    { value: 'Oświetlenie LED na suficie  line', label: 'Oświetlenie LED na suficie  line' },
    { value: 'Oświetlenie LED na suficie  strip', label: 'Oświetlenie LED na suficie  strip' },
    { value: 'Oświetlenie LED na suficie box', label: 'Oświetlenie LED na suficie box' },
    { value: 'Czujniki pogodowe', label: 'Czujniki pogodowe' },
    { value: 'Sterowanie smart', label: 'Sterowanie smart' },
    { value: 'Audio', label: 'Audio' },
];

const WYMAGANE_POLE = 'To pole jest wymagane';

const SelectValidation = Yup.object()
    .shape({
        value: Yup.string().required(),
        label: Yup.string().required(),
    })
    .nonNullable(WYMAGANE_POLE)
    .required(WYMAGANE_POLE);

const MultiSelectValidation = Yup.array()
    .of(
        Yup.object().shape({
            value: Yup.string().required(),
            label: Yup.string().required(),
        })
    )
    .required(WYMAGANE_POLE)
    .min(1, WYMAGANE_POLE)
    .nonNullable(WYMAGANE_POLE);

export type TemplateParams = {
    name: string;
    number: string;
    type: Option | null;
    dimension: Option | null;
    construction: Option | null;
    sideConstruction: Option[] | null;
    accessories: Option[] | null;
};

export type Option = {
    value: string;
    label: string;
};

export const initialValues: TemplateParams = {
    name: '',
    number: '',
    type: null,
    dimension: null,
    construction: null,
    sideConstruction: null,
    accessories: null,
};
export const validationSchema = Yup.object({
    name: Yup.string().required(WYMAGANE_POLE),
    number: Yup.string().matches(/^\d+$/, 'Only numeric values are allowed').required(WYMAGANE_POLE),
    type: SelectValidation,
    dimension: SelectValidation,
    construction: SelectValidation,
    sideConstruction: MultiSelectValidation,
});
