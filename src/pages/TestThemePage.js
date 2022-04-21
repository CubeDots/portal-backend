
import { ThemeProvider } from "../components/ThemeContext";
import TestTheme from "../components/TestTheme";

function TestThemePage() {    
    return (
        <div className="mt-70">
            <div>TestThemePage</div>

            <ThemeProvider>
                theme here
                <TestTheme /> 
            </ThemeProvider>
        </div>
    );
}

export default TestThemePage;