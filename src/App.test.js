import { render, screen, waitFor} from '@testing-library/react';
import App from './App';
import LastUsersList from './Components/LastUsersList/LastUsersList';

test('The Button title should be rendered', () => {
    render( < App / > );
    const element = screen.getByText(/The Button/);
    expect(element).toBeInTheDocument();
});

test('Total of clicks list should be rendered', () => { 
    const {getByText} = render( < App / > );
    expect(getByText(/amount of clicks/i)).toBeInTheDocument();
});

test('The countdown timer should be 60', () => { 
    const {getByText} = render( < App / > );
    expect(getByText(/60/i)).toBeInTheDocument();
});

test('The users list should be rendered', async() => { 
    const {container} = render( < LastUsersList / > );
    await waitFor(()=>{
        expect(container.firstChild.className).toBe('users-container')
    })
});
