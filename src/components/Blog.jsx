import React, { useRef } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { PDFDownloadLink, Page, Text, View, Document } from '@react-pdf/renderer';

const Blog = () => {
    const pageRef = useRef(null);
    const styles = {
        heading: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        paragraph: {
            fontSize: 12,
            marginBottom: 5,
        },
        lastParagraph: {
            fontStyle: 'italic',
        },
    };
    const generatePDF = () => {
        const pdfContent = (
            <Document>
                <Page size="A4">
                    <View>
                        <Text style={styles.heading}>Differences between uncontrolled and controlled components.</Text>
                        <Text style={styles.paragraph}> Uncontrolled components and controlled components are two approaches used in building user interfaces, particularly in the context of forms and inputs. Here are the key differences between the two:

                            Data Flow: In uncontrolled components, the data flow is handled by the DOM (Document Object Model). The form inputs are directly accessed and manipulated using JavaScript to retrieve their values when needed. In contrast, controlled components rely on explicit management of data flow. The component's state holds the current value of the input, and any changes to the input value are controlled by updating the state.

                            State Management: Uncontrolled components do not require explicit state management. The form inputs maintain their own internal state, which is directly accessed when required. Controlled components, on the other hand, require state management. The component's state holds the current value of the input, and any changes to the input value are reflected in the state.

                            Event Handling: Uncontrolled components rely on standard DOM events and event handlers to capture user interactions. Changes in the input values are detected by listening to events such as onChange or onBlur. In controlled components, event handlers are used to update the component's state whenever a user interacts with the input. The component then re-renders with the updated state value.

                            Accessibility: Uncontrolled components can be more challenging to handle in terms of accessibility. Since the component's state is not explicitly managed, it may be harder to ensure accessibility features such as proper keyboard navigation, focus management, and form validation. Controlled components, with their explicit data flow, provide more control over accessibility and can be easier to manage in this regard.

                            Validation and Error Handling: Controlled components allow for more straightforward validation and error handling. Since the component's state holds the current input value, it can be easily validated and checked for errors before submitting the form. Uncontrolled components may require additional work to validate the input values as the data is not explicitly managed.

                            Form Submission: Uncontrolled components may rely on direct DOM manipulation to retrieve form data when submitting. The form inputs are accessed directly to gather the data, which can be simpler for basic forms. Controlled components typically handle form submission by capturing the input values from the component's state, making it easier to gather and process the form data.

                            Overall, the choice between uncontrolled and controlled components depends on the complexity of the form and the desired level of control over data flow and user interactions. Controlled components provide more explicit control and are often preferred for complex forms, while uncontrolled components can be simpler to implement for basic forms.</Text>
                        <Text Text style={styles.heading}>How to validate React props using PropTypes</Text>
                        <Text Text style={styles.paragraph}>Step 1: Install PropTypes
                            Make sure you have the prop-types package installed in your project. You can install it using npm or yarn:
                            npm install prop-types
                            or

                            yarn add prop-types
                            Step 2: Import PropTypes
                            In the component file where you want to validate props, import PropTypes:
                            javascript
                            import PropTypes from 'prop-types';
                            Step 3: Define PropTypes
                            For each prop you want to validate, define the prop types using the PropTypes object. There are various prop types available, such as string, number, boolean, object, array, etc. Here's an example of how you can define PropTypes:
                            javascript
                            <br />
                            <code>
                                MyComponent.propTypes =
                                name: PropTypes.string.isRequired,
                                age: PropTypes.number,
                                email: PropTypes.string.isRequired,
                                isAdmin: PropTypes.bool,
                                onButtonClick: PropTypes.func.isRequired,
                                options: PropTypes.arrayOf(PropTypes.string),
                                user: PropTypes.shape
                                username: PropTypes.string,
                                role: PropTypes.string
                            </code>
                            <br />

                            In the above example, we have defined prop types for the name, age, email, isAdmin, onButtonClick, options, and user props. The isRequired validator is used to indicate that the prop is mandatory.

                            Step 4: Accessing Validation Errors
                            React will now validate the props passed to your component based on the defined PropTypes. If any prop does not match the specified type or is missing a required prop, a warning will be logged in the browser console.

                            It's important to note that PropTypes are only checked in development mode, so make sure you have the development environment configured correctly.

                            That's it! You have successfully set up PropTypes to validate React props in your component. Remember to define the PropTypes for each component that requires prop validation to ensure proper usage and catch any potential issues early on.</Text>
                        <Text Text style={styles.heading}>Difference between nodejs and express js.</Text>
                        <Text Text style={styles.paragraph}> Node.js and Express.js are both JavaScript-based technologies commonly used in web development, but they serve different purposes:

                            Node.js:

                            Node.js is a runtime environment that allows you to execute JavaScript code on the server-side.
                            It is built on the V8 JavaScript engine and provides an event-driven, non-blocking I/O model, making it highly efficient and scalable.
                            Node.js enables developers to build server-side applications, such as web servers, APIs, real-time applications, and command-line tools, using JavaScript.
                            It provides access to various modules and libraries through npm (Node Package Manager), allowing developers to leverage a wide range of functionalities.
                            Express.js:

                            Express.js is a web application framework built on top of Node.js.
                            It simplifies the process of building web applications by providing a set of features and tools to handle routing, middleware, request/response handling, and more.
                            Express.js offers a minimalistic and flexible approach, allowing developers to structure and organize their application according to their needs.
                            It provides a robust set of HTTP utility methods and middleware for creating APIs, handling authentication, managing sessions, serving static files, and more.
                            Express.js integrates seamlessly with other Node.js modules and libraries, allowing developers to leverage the vast Node.js ecosystem.
                            In summary, Node.js is the underlying runtime environment that allows you to run JavaScript on the server-side, while Express.js is a framework built on top of Node.js that provides additional features and abstractions to simplify web application development. Express.js helps in handling routing, middleware, and other common tasks, making it a popular choice for building web applications using Node.js.</Text>
                        <Text Text style={styles.heading}>What is a custom hook, and why will you create a custom hook?</Text>
                        <Text Text style={styles.paragraph}>A custom hook in React is a JavaScript function that starts with the prefix "use" and follows the rules of the Hooks API. Custom hooks allow you to encapsulate reusable logic and stateful behavior in a modular way, making it easier to share and reuse code across different components.

                            There are several reasons why you might create a custom hook:

                            Reusability: Custom hooks enable you to extract common logic from components and package it into a reusable function. This allows you to avoid code duplication and promotes cleaner, more maintainable code. Custom hooks can be used in multiple components, promoting code reuse across your application.

                            Abstraction of complex logic: If you have complex logic that involves managing state, handling side effects, or integrating with external APIs, creating a custom hook can abstract away the complexity. This simplifies your components, making them more focused and easier to understand.

                            Encapsulation of related logic: Custom hooks provide a way to encapsulate related logic and state together. By creating a custom hook, you can group together the state, effects, and other logic that work together to achieve a specific functionality. This helps in organizing and structuring your codebase.

                            Testing: Custom hooks facilitate easier testing. Since custom hooks are decoupled from components, you can write unit tests specifically for the custom hook's logic. This allows you to test the behavior of the hook independently and mock any dependencies it may have.

                            To create a custom hook, you simply define a function that uses existing React hooks or other custom hooks. You can combine multiple hooks and create your own state variables, effects, and return values. The custom hook can then be imported and used in any component in your application.

                            Overall, custom hooks are a powerful mechanism in React that promotes code reuse, abstraction of complex logic, and organization of related functionality. They provide a way to create modular and reusable code snippets, enhancing the efficiency and maintainability of your React applications.</Text>
                    </View>
                </Page>
            </Document>
        );

        return pdfContent;
    };

    return (
        <div className='max-w-screen-xl mx-auto my-10 p-2' ref={pageRef}>
            <div className='flex justify-end my-6'>
                <PDFDownloadLink document={generatePDF()} fileName='blog.pdf'>
                    <button>
                        <FaFilePdf className='w-6 h-8' />
                    </button>
                </PDFDownloadLink>
            </div>
            <div className='border p-2'>
                <h2 className='text-center text-lg font-bold'>Differences between uncontrolled and controlled components.</h2>
                <p className='my-4'>
                    Uncontrolled components and controlled components are two approaches used in building user interfaces, particularly in the context of forms and inputs. Here are the key differences between the two:

                    Data Flow: In uncontrolled components, the data flow is handled by the DOM (Document Object Model). The form inputs are directly accessed and manipulated using JavaScript to retrieve their values when needed. In contrast, controlled components rely on explicit management of data flow. The component's state holds the current value of the input, and any changes to the input value are controlled by updating the state.

                    State Management: Uncontrolled components do not require explicit state management. The form inputs maintain their own internal state, which is directly accessed when required. Controlled components, on the other hand, require state management. The component's state holds the current value of the input, and any changes to the input value are reflected in the state.

                    Event Handling: Uncontrolled components rely on standard DOM events and event handlers to capture user interactions. Changes in the input values are detected by listening to events such as onChange or onBlur. In controlled components, event handlers are used to update the component's state whenever a user interacts with the input. The component then re-renders with the updated state value.

                    Accessibility: Uncontrolled components can be more challenging to handle in terms of accessibility. Since the component's state is not explicitly managed, it may be harder to ensure accessibility features such as proper keyboard navigation, focus management, and form validation. Controlled components, with their explicit data flow, provide more control over accessibility and can be easier to manage in this regard.

                    Validation and Error Handling: Controlled components allow for more straightforward validation and error handling. Since the component's state holds the current input value, it can be easily validated and checked for errors before submitting the form. Uncontrolled components may require additional work to validate the input values as the data is not explicitly managed.

                    Form Submission: Uncontrolled components may rely on direct DOM manipulation to retrieve form data when submitting. The form inputs are accessed directly to gather the data, which can be simpler for basic forms. Controlled components typically handle form submission by capturing the input values from the component's state, making it easier to gather and process the form data.

                    Overall, the choice between uncontrolled and controlled components depends on the complexity of the form and the desired level of control over data flow and user interactions. Controlled components provide more explicit control and are often preferred for complex forms, while uncontrolled components can be simpler to implement for basic forms.
                </p>
            </div>
            <div className='my-8 border p-2'>
                <h2 className='text-center text-lg font-bold'>How to validate React props using PropTypes.</h2>
                <p className='my-4'>
                    Step 1: Install PropTypes
                    Make sure you have the prop-types package installed in your project. You can install it using npm or yarn:
                    npm install prop-types
                    or

                    yarn add prop-types
                    Step 2: Import PropTypes
                    In the component file where you want to validate props, import PropTypes:
                    javascript
                    import PropTypes from 'prop-types';
                    Step 3: Define PropTypes
                    For each prop you want to validate, define the prop types using the PropTypes object. There are various prop types available, such as string, number, boolean, object, array, etc. Here's an example of how you can define PropTypes:
                    javascript
                    <br />
                    <code>
                        MyComponent.propTypes =
                        name: PropTypes.string.isRequired,
                        age: PropTypes.number,
                        email: PropTypes.string.isRequired,
                        isAdmin: PropTypes.bool,
                        onButtonClick: PropTypes.func.isRequired,
                        options: PropTypes.arrayOf(PropTypes.string),
                        user: PropTypes.shape
                        username: PropTypes.string,
                        role: PropTypes.string
                    </code>
                    <br />

                    In the above example, we have defined prop types for the name, age, email, isAdmin, onButtonClick, options, and user props. The isRequired validator is used to indicate that the prop is mandatory.

                    Step 4: Accessing Validation Errors
                    React will now validate the props passed to your component based on the defined PropTypes. If any prop does not match the specified type or is missing a required prop, a warning will be logged in the browser console.

                    It's important to note that PropTypes are only checked in development mode, so make sure you have the development environment configured correctly.

                    That's it! You have successfully set up PropTypes to validate React props in your component. Remember to define the PropTypes for each component that requires prop validation to ensure proper usage and catch any potential issues early on.
                </p>
            </div>
            <div className='my-8 border p-2'>
                <h2 className='text-center text-lg font-bold'>Difference between nodejs and express js.</h2>
                <p className='my-4'>
                    Node.js and Express.js are both JavaScript-based technologies commonly used in web development, but they serve different purposes:

                    Node.js:

                    Node.js is a runtime environment that allows you to execute JavaScript code on the server-side.
                    It is built on the V8 JavaScript engine and provides an event-driven, non-blocking I/O model, making it highly efficient and scalable.
                    Node.js enables developers to build server-side applications, such as web servers, APIs, real-time applications, and command-line tools, using JavaScript.
                    It provides access to various modules and libraries through npm (Node Package Manager), allowing developers to leverage a wide range of functionalities.
                    Express.js:

                    Express.js is a web application framework built on top of Node.js.
                    It simplifies the process of building web applications by providing a set of features and tools to handle routing, middleware, request/response handling, and more.
                    Express.js offers a minimalistic and flexible approach, allowing developers to structure and organize their application according to their needs.
                    It provides a robust set of HTTP utility methods and middleware for creating APIs, handling authentication, managing sessions, serving static files, and more.
                    Express.js integrates seamlessly with other Node.js modules and libraries, allowing developers to leverage the vast Node.js ecosystem.
                    In summary, Node.js is the underlying runtime environment that allows you to run JavaScript on the server-side, while Express.js is a framework built on top of Node.js that provides additional features and abstractions to simplify web application development. Express.js helps in handling routing, middleware, and other common tasks, making it a popular choice for building web applications using Node.js.
                </p>
            </div>
            <div className='my-8 border p-2'>
                <h2 className='text-center text-lg font-bold'>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='my-4'>
                    A custom hook in React is a JavaScript function that starts with the prefix "use" and follows the rules of the Hooks API. Custom hooks allow you to encapsulate reusable logic and stateful behavior in a modular way, making it easier to share and reuse code across different components.

                    There are several reasons why you might create a custom hook:

                    Reusability: Custom hooks enable you to extract common logic from components and package it into a reusable function. This allows you to avoid code duplication and promotes cleaner, more maintainable code. Custom hooks can be used in multiple components, promoting code reuse across your application.

                    Abstraction of complex logic: If you have complex logic that involves managing state, handling side effects, or integrating with external APIs, creating a custom hook can abstract away the complexity. This simplifies your components, making them more focused and easier to understand.

                    Encapsulation of related logic: Custom hooks provide a way to encapsulate related logic and state together. By creating a custom hook, you can group together the state, effects, and other logic that work together to achieve a specific functionality. This helps in organizing and structuring your codebase.

                    Testing: Custom hooks facilitate easier testing. Since custom hooks are decoupled from components, you can write unit tests specifically for the custom hook's logic. This allows you to test the behavior of the hook independently and mock any dependencies it may have.

                    To create a custom hook, you simply define a function that uses existing React hooks or other custom hooks. You can combine multiple hooks and create your own state variables, effects, and return values. The custom hook can then be imported and used in any component in your application.

                    Overall, custom hooks are a powerful mechanism in React that promotes code reuse, abstraction of complex logic, and organization of related functionality. They provide a way to create modular and reusable code snippets, enhancing the efficiency and maintainability of your React applications.
                </p>
            </div>
        </div>
    );
};

export default Blog;
