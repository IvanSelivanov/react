import ReactOnRails from 'react-on-rails'

import { CommentForm } from '../bundles/Comments/components/CommentForm'
import { App } from '../bundles/Comments/app'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  CommentForm,
  App,
})
