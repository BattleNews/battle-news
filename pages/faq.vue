<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" :title="title">
      <Accordion>
        <AccordionItem
          v-for="(question, index) in questions"
          :key="index"
          :question="question"
        />
      </Accordion>
    </BaseSection>
  </div>
</template>

<script>
import questionsQuery from '~/apollo/queries/questions'

export default {
  data () {
    return {
      title: 'Foire aux Questions',
      questions: []
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  apollo: {
    questions: {
      query: questionsQuery
    }
  }
}
</script>
