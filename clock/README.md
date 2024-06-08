# Analog and Digital Clock with Theme Switch

## Overview
This project is a combination of an analog clock, a digital clock, and a theme switch button. The clocks display the current time, while the theme switch button toggles between light and dark modes, altering the appearance of the clocks and the background. This interactive web application is implemented using HTML, CSS, and JavaScript.

## HTML Structure
The `index.html` file defines the structure of the webpage:
- `<!DOCTYPE html>` declaration specifies the HTML version.
- `<html>` element sets the language to English.
- `<head>` section contains metadata and links to external resources.
- External CSS file (`styles.css`) styles the elements.
- The `<body>` contains:
  - A container div (`clock-container`) holding the clocks and theme switch button.
  - Inside the container:
    - An analog clock (`clock`) with hour, minute, and second hands.
    - Divs representing clock digits.
    - A digital time display (`digital-time`).
    - A button (`theme-toggle`) to switch between light and dark modes.
- External JavaScript file (`script.js`) provides functionality for clock updates and theme switching.

## CSS Styling (`styles.css`)
The CSS file defines styles for various elements:
- **Global Styles**: Sets background colors, text colors, and font families.
- **Theme Modes**: Defines styles for light and dark modes.
- **Clock Styling**: Styles the clock container, face, hands, center dot, and digits.
- **Digital Clock Display**: Styles the digital time display.
- **Theme Switch Button**: Styles the theme switch button.
- **Animations**: Defines a keyframe animation for the digital time blinking effect.

## JavaScript Functionality (`script.js`)
The JavaScript file provides functionality for:
1. **Clock Updates**:
   - `setClock()`: Updates the analog clock hands.
   - `updateDigitalTime(now)`: Updates the digital time display.
2. **Theme Switching**:
   - `toggleTheme()`: Toggles between light and dark modes.
3. **Event Handling**:
   - Event listener for the theme switch button toggles the theme.
4. **Clock Update Interval**:
   - `setInterval(setClock, 1000)`: Updates the clock every second.
5. **Initialization**:
   - Initial calls to `setClock()` and `toggleTheme()` set up the clock and theme.

## Functionality Overview
This project demonstrates:
- Real-time clock updates.
- Interactive theme switching.
- User-friendly analog and digital clock display.
- Seamless integration of HTML, CSS, and JavaScript.

## Interactivity
- **Theme Switching**: Users can switch between light and dark modes for better readability.
- **Analog Clock**: Continuous updates provide a dynamic display of the current time.
- **Digital Clock**: Offers an alternative time representation for user preference.
- **User Interaction**: Clicking the theme switch button triggers visual changes in the clocks and background.
