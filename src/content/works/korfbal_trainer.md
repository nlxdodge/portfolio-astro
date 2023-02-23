---
order: 2
title: Korfbal Trainer
author: Gerben Veenhof
date: 2021-08-06
image: korfbal_trainer
description: The Korfbal Trainer app is a small VueJS 3 application that can generate Korfbal Trainings from a selection of dynamic exercises.
keywords: [ forfbal, Vue, Vue3, trainer ]
category: Typescript/Vue
---

While it's no secret that people can't go without sports or some exercise to remain fit, our korfbal team most of the time didn't have the time to create a training for ourselves. For that I had the idea to gather a lot of exercises together, put them in some sort of database and create a simple generator for it. That way we always would have structured training for ourselves.

I started out by using the new Vue 3.0 version for this project as I wanted to learn that, together with TypeScript, as Vue didn't really put an emphasis on TypeScript in version 2.0.

As well as testing and actually making a working project in typescript I also had to think of a way to structure the data for the application. For that I used a static json file in the project that it reads (as all data in there is publicly available anyways). I combined the json file with the Vuex Store to filter or update the data when needed.

```javascript
import data from './korfbal.json'

export default createStore({
  actions: {
    loadData ({ commit }) {
      commit('setCategories', data.categories)
      commit('setExercises', data.exercises)
    }
  }
})
```

This way I have no need for a database, because frankly this application doesn't really need one *yet*.
I also learned a much about how Typescript work, but I am frankly not up to speed yet with working with it. It still takes a lot of searching for those small details.

Like making a class that actually should have been an interface all along, like so:

```javascript
export interface Category {
    label: string,
    value: string,
}
```

I am, as of writing, still not done with the project. The generator needs some more attention before it is actually usable. But the collection of exercises is already available to look at. Which for our team, is a nice helping hand.

::content-flex-center
    ::content-button{href="https://github.com/nlxdodge/korfbal-trainer" icon="fab fa-github"}
    Korfbal Trainer Repository
    ::
    ::content-button{href="https://korfbal-trainer.netlify.app/" icon="fas fa-link"}
    Korfbal Trainer App
    ::
::
