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

general = Theme.create!(
    {
        category: "General"
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
        theme_id: creativity.id
    })

# Sample journal entries
entryOne = JournalEntry.create!(
    {
        date: "02/02/2022",
        author_id: madison.id
    }
)

entryTwo = JournalEntry.create!(
    {
        date: "03/02/2022",
        author_id: madison.id
    }
)

entryThree = JournalEntry.create!(
    {
        date: "05/02/2022",
        author_id: madison.id
    }
)

entryFour = JournalEntry.create!(
    {
        date: "07/02/2022",
        author_id: madison.id
    }
)

entryFive = JournalEntry.create!(
    {
        date: "08/02/2022",
        author_id: madison.id
    }
)

entrySix = JournalEntry.create!(
    {
        date: "10/02/2022",
        author_id: madison.id
    }
)

entrySeven = JournalEntry.create!(
    {
        date: "12/02/2022",
        author_id: madison.id
    }
)

entryEight = JournalEntry.create!(
    {
        date: "13/02/2022",
        author_id: madison.id
    }
)

entryNine = JournalEntry.create!(
    {
        date: "14/02/2022",
        author_id: madison.id
    }
)

entryTen = JournalEntry.create!(
    {
        date: "16/02/2022",
        author_id: madison.id
    }
)

entryEleven = JournalEntry.create!(
    {
        date: "17/02/2022",
        author_id: madison.id
    }
)

entryTwelve = JournalEntry.create!(
    {
        date: "11/02/2022",
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

generalQuestionOne = Question.create!(
    {
        question: "Share today's thoughts.",
        theme_id: general.id
    }
)

# Sample check list items
creativityItemOne = CheckListItem.create!(
    {
        item: "Doodled or sketched.",
        theme_id: creativity.id
    }
)

creativityItemTwo = CheckListItem.create!(
    {
        item: "Wrote down an idea.",
        theme_id: creativity.id
    }
)

creativityItemThree = CheckListItem.create!(
    {
        item: "Worked on a side project.",
        theme_id: creativity.id
    }
)

creativityItemFour = CheckListItem.create!(
    {
        item: "Set aside time to brainstorm.",
        theme_id: creativity.id
    }
)

creativityItemFive = CheckListItem.create!(
    {
        item: "Consumed inspiring content.",
        theme_id: creativity.id
    }
)

creativityItemSix = CheckListItem.create!(
    {
        item: "Took a creative risk.",
        theme_id: creativity.id
    }
)

creativityItemSeven = CheckListItem.create!(
    {
        item: "Surrounded self with creative people.",
        theme_id: creativity.id
    }
)

creativityItemEight = CheckListItem.create!(
    {
        item: "Learned something new.",
        theme_id: creativity.id
    }
)

creativityItemNine = CheckListItem.create!(
    {
        item: "Read a fiction book.",
        theme_id: creativity.id
    }
)

creativityItemTen = CheckListItem.create!(
    {
        item: "Changed my routine.",
        theme_id: creativity.id
    }
)

positivityItemOne = CheckListItem.create!(
    {
        item: "Reflected on things that make me happy.",
        theme_id: positivity.id
    }
)

positivityItemTwo = CheckListItem.create!(
    {
        item: "Did an activity that I love.",
        theme_id: positivity.id
    }
)

positivityItemThree = CheckListItem.create!(
    {
        item: "Ate healthy food that supports the mind.",
        theme_id: positivity.id
    }
)

positivityItemFour = CheckListItem.create!(
    {
        item: "Gave back to others in some way.",
        theme_id: positivity.id
    }
)

positivityItemFive = CheckListItem.create!(
    {
        item: "Remained positive during a stressful situation.",
        theme_id: positivity.id
    }
)

positivityItemSix = CheckListItem.create!(
    {
        item: "Decompressed or unplugged for an hour or more.",
        theme_id: positivity.id
    }
)

positivityItemSeven = CheckListItem.create!(
    {
        item: "Made exciting plans.",
        theme_id: positivity.id
    }
)

positivityItemEight = CheckListItem.create!(
    {
        item: "Learned something new.",
        theme_id: positivity.id
    }
)

positivityItemNine = CheckListItem.create!(
    {
        item: "Remembered a happy memory.",
        theme_id: positivity.id
    }
)

positivityItemTen = CheckListItem.create!(
    {
        item: "Spent time with positive people.",
        theme_id: positivity.id
    }
)

productivityItemOne = CheckListItem.create!(
    {
        item: "Got 8 hours or more of sleep.",
        theme_id: productivity.id
    }
)

productivityItemTwo = CheckListItem.create!(
    {
        item: "Removed distractions.",
        theme_id: productivity.id
    }
)

productivityItemThree = CheckListItem.create!(
    {
        item: "Kept track of today's tasks.",
        theme_id: productivity.id
    }
)

productivityItemFour = CheckListItem.create!(
    {
        item: "Wrote down goals and priorities.",
        theme_id: productivity.id
    }
)

productivityItemFive = CheckListItem.create!(
    {
        item: "Drank water throughout the day.",
        theme_id: productivity.id
    }
)

productivityItemSix = CheckListItem.create!(
    {
        item: "Organized home or work space.",
        theme_id: productivity.id
    }
)

productivityItemSeven = CheckListItem.create!(
    {
        item: "Avoided procrastination.",
        theme_id: productivity.id
    }
)

productivityItemEight = CheckListItem.create!(
    {
        item: "Silenced computer and phone notifications.",
        theme_id: productivity.id
    }
)

productivityItemNine = CheckListItem.create!(
    {
        item: "Took a break outdoors to clear head.",
        theme_id: productivity.id
    }
)

productivityItemTen = CheckListItem.create!(
    {
        item: "Made bed.",
        theme_id: productivity.id
    }
)

generalItemOne = CheckListItem.create!(
    {
        item: "Woke up at at a decent time.",
        theme_id: general.id
    }
)

generalItemTwo = CheckListItem.create!(
    {
        item: "Ate three solid meals.",
        theme_id: general.id
    }
)

generalItemThree = CheckListItem.create!(
    {
        item: "Spent at least 30 minutes exercising.",
        theme_id: general.id
    }
)

generalItemFour = CheckListItem.create!(
    {
        item: "Connected with friends or family.",
        theme_id: general.id
    }
)

generalItemFive = CheckListItem.create!(
    {
        item: "Completed work for the day.",
        theme_id: general.id
    }
)

generalItemSix = CheckListItem.create!(
    {
        item: "Relaxed in the evening.",
        theme_id: general.id
    }
)

generalItemSeven = CheckListItem.create!(
    {
        item: "Listened to music.",
        theme_id: general.id
    }
)

generalItemEight = CheckListItem.create!(
    {
        item: "Set daily goals.",
        theme_id: general.id
    }
)

generalItemNine = CheckListItem.create!(
    {
        item: "Washed face/brushed teeth.",
        theme_id: general.id
    }
)

generalItemTen = CheckListItem.create!(
    {
        item: "Meditated.",
        theme_id: general.id
    }
)

# Sample checks
Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemOne.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemTwo.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemThree.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemFour.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemFive.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemSix.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemSeven.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemEight.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemNine.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemTen.id,
        journal_entry_id: entryOne.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemOne.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemTwo.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemThree.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemFour.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemFive.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemSix.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemSeven.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemEight.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemNine.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemTen.id,
        journal_entry_id: entryTwo.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemOne.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemTwo.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemThree.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemFour.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemFive.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemSix.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemSeven.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: false,
        check_list_item_id: creativityItemEight.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemNine.id,
        journal_entry_id: entryThree.id
    }
)

Check.create!(
    {
        checked: true,
        check_list_item_id: creativityItemTen.id,
        journal_entry_id: entryThree.id
    }
)

# Sample answers
Answer.create!(
    {
        answer: "Today, I worked on building my journal application.",
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

Answer.create!(
    {
        answer: "Today, I worked on building my journal application.",
        question_id: creativityQuestionOne.id,
        journal_entry_id: entryTwo.id
    }
)

Answer.create!(
    {
        answer: "I thought about hanging up colorful paintings in my office to inspire my imagination.",
        question_id: creativityQuestionTwo.id,
        journal_entry_id: entryTwo.id
    }
)

Answer.create!(
    {
        answer: "I plan to build out the CSS for my app to improve the design.",
        question_id: creativityQuestionThree.id,
        journal_entry_id: entryTwo.id
    }
)

Answer.create!(
    {
        answer: "Today, I worked on building my journal application.",
        question_id: creativityQuestionOne.id,
        journal_entry_id: entryThree.id
    }
)

Answer.create!(
    {
        answer: "I thought about hanging up colorful paintings in my office to inspire my imagination.",
        question_id: creativityQuestionTwo.id,
        journal_entry_id: entryThree.id
    }
)

Answer.create!(
    {
        answer: "I plan to build out the CSS for my app to improve the design.",
        question_id: creativityQuestionThree.id,
        journal_entry_id: entryThree.id
    }
)


puts "Seeding Done!"