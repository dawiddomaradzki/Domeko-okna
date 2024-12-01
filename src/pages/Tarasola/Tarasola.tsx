import { memo } from 'react';
import Form from 'react-bootstrap/esm/Form';
import styled from 'styled-components';

interface TarasolaProps {
    className?: string;
}

const Tarasola = ({ className }: TarasolaProps) => {
    return (
        <div className={className}>
            <Form.Select>
                <option>Default select</option>
            </Form.Select>
        </div>
    );
};

const Memoized = memo(Tarasola);
const Styled = styled(Memoized)`
    max-width: 1800px;
    margin: auto;
    padding-top: 10rem;
`;
export default Styled;
