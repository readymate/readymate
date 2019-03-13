import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.story.tsx?$/)
function loadStories() {
    addDecorator(withKnobs)
    req.keys().forEach(filename => req(filename))
}

export default configure(loadStories, module)
