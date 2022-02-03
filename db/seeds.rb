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


# Sample authors
madison = Author.create!(
    {
        first_name: "Madison",
        last_name: "Sorah",
        pen_name: "mochipancake",
        email: "madisonsorah@gmail.com",
        password: "catsarecute1",
        bio: "Hi there! I am a cat lover, anime watcher and front-end developer living in Brooklyn, NY.",
        avatar_url: "https://previews.dropbox.com/p/thumb/ABYApU8ZoVmGrdyuxDxEoMfJGr02oOXx1vCRR9szHP5gnaYnzU045uQaYb-hvZYwujUGyVDl2c7PiCZwWINR2NRNgJMZlVGGRKRmNoWRn31j2vi3mRSemwklY-RSs_AxmS6gEuxVkG7RkxRJTq4twrlT_piM-_cR8VBVxV3jy6Lg5PeAiKNxqC4-tVl-XwTXUGOMVThvI68uu7smpGUt5nTXIFDYvTcJCFGkwNPt43ntqQHfmq76DoFlki3CSI26YEL30r3ullGnlcA2S55vbu7RtvEJYht1SkMpwzun_CTdGe2FecJU08AEDHx0PY_wpTGAqGH0vpAz6ipqyYg_LYCdLbLrdAfr5Pk1c-v4HXNV2Q/p.jpeg"
    })

# Sample journal entries
entryOne = JournalEntry.create!(
    {
        image_url: "XX",
        date: "02/02/2022",
        author_id: madison.id
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

# Sample themes
creativity = Theme.create!(
    {
        category: "Creativity",
        author_id: madison.id,
        journal_entry_id: entryOne.id
    })

# productivity = Theme.create!(
#     {
#         category: "Productivity"
#     })

# selfCare = Theme.create!(
#     {
#         category: "Self Care"
#     })

# healthyHabits = Theme.create!(
#     {
#         category: "Healthy Habits"
#     })

# gratitude = Theme.create!(
#     {
#         category: "Gratitude"
#     })

# selfReflection = Theme.create!(
#     {
#         category: "Self Reflection"
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
        question: "What's one creative thought you had today?",
        theme_id: creativity.id
    }
)

creativityQuestionThree = Question.create!(
    {
        question: "How do you plan to exercise your creativity tomorrow?",
        theme_id: creativity.id
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