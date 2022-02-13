# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting previous data"
Author.destroy_all
Theme.destroy_all
JournalEntry.destroy_all
Question.destroy_all
Answer.destroy_all
puts "🌱 Seeding data..."

# Sample themes
creativity = Theme.create!(
    {
        category: "Creativity"
    })

productivity = Theme.create!(
    {
        category: "Productivity"
    })

positivity = Theme.create!(
    {
        category: "Positivity"
    })

# Sample authors
madison = Author.create!(
    {
        first_name: "Madison",
        last_name: "Sorah",
        pen_name: "mochipancake",
        email: "madisonsorah@gmail.com",
        password: "catsarecute1",
        bio: "Hi there! I am a cat lover, anime watcher and front-end developer living in Brooklyn, NY.",
        avatar_url: "https://previews.dropbox.com/p/thumb/ABdSLhejOkXnWgIe9P-liMU8eCXMohRT_Ral3XEzn2T8dOMIvednPQd1tkxqTSUgdfvudThpz99IPpZ_fGjtEljEZP24GdIzcHmYJiQbpE9ld6v-QT5jE-XT7uwxo_hdCrdsSU4eVvRCnDmkecyNpKx2wIZwz3ouFGDYMSRiTrWc1SQLOWi0RIS-DSYlhohpT1uxsLiHADtL1AEGFupyZ72Zqiy_DMkJjOxQ1pLdEjO_hCrLCgAvI1Fvf16ggVMibXvzIBCCXp5lITA_TcUD4S92wyT3PvyAKVFXEVau3JQfcyzGGel6j7zkpkGaz17k-q7IOuHoGoKMME1NiPRFI2EOhleavyOMPYLMO9Kbhvmx1g/p.jpeg",
        theme: creativity
    })

# Sample journal entries
entryOne = JournalEntry.create!(
    {
        image_url: "XX",
        date: "02/02/2022",
        author: madison
    }
)

# entryTwo = JournalEntry.create!(
#     {
#         image_url: "XX"
#         date: Date.strptime("02/03/2022", "%m/%d/%Y")
#         author_id: madison.id
#     })

# entryThree = JournalEntry.create!(
#     {
#         image_url: "XX"
#         date: Date.strptime("02/04/2022", "%m/%d/%Y")
#         author_id: madison.id
#     })


# Sample questions
creativityQuestionOne = Question.create!(
    {
        question: "How did you express your creativity today?",
        theme_id: creativity.id
    }
)

creativityQuestionTwo = Question.create!(
    {
        question: "What is one creative thought you had today?",
        theme_id: creativity.id
    }
)

creativityQuestionThree = Question.create!(
    {
        question: "How do you plan to exercise your creativity tomorrow?",
        theme_id: creativity.id
    }
)

productivityQuestionOne = Question.create!(
    {
        question: "How productive were you today?",
        theme_id: productivity.id
    }
)

productivityQuestionTwo = Question.create!(
    {
        question: "What was the most productive thing you accomplished?",
        theme_id: productivity.id
    }
)

productivityQuestionThree = Question.create!(
    {
        question: "How do you plan on being productive tomorrow?",
        theme_id: productivity.id
    }
)

positivityQuestionOne = Question.create!(
    {
        question: "How were your positivity levels today?",
        theme_id: positivity.id
    }
)

positivityQuestionTwo = Question.create!(
    {
        question: "What is one positive thing that happened that made you happy?",
        theme_id: positivity.id
    }
)

positivityQuestionThree = Question.create!(
    {
        question: "What are you most looking forward to tomorrow?",
        theme_id: positivity.id
    }
)


# Sample answers
Answer.create!(
    {
        answer: "Today, I worked on building my bullet journal application.",
        question_id: creativityQuestionOne.id,
        journal_entry_id: entryOne.id
    }
)

Answer.create!(
    {
        answer: "I thought about hanging up colorful paintings in my office to inspire my imagination.",
        question_id: creativityQuestionTwo.id,
        journal_entry_id: entryOne.id
    }
)

Answer.create!(
    {
        answer: "I plan to build out the CSS for my app to improve the design.",
        question_id: creativityQuestionThree.id,
        journal_entry_id: entryOne.id
    }
)


puts "Seeding Done!"