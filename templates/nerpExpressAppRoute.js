/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpAppRoute'

// ------------------------------------
// OUTPUT
// ------------------------------------
app.use(require('routes/routeName'))

// ------------------------------------
// INPUT
// ------------------------------------
app.use(require('routes/${1:routeName}'))${2}

// ------------------------------------
// GENERATED
// ------------------------------------
app.use(require(\'routes/${1:routeName}\'))${2}
