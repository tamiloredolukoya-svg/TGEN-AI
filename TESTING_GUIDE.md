# StudyMate AI - Quick Testing Guide

## How to Access the App

### Local Access (Development)
```
URL: http://localhost:8000
```

### Network Access (From Other Devices)
```
URL: http://192.168.0.111:8000
Works on: iPhone, Android, iPad, other computers on same WiFi
```

## Features to Test

### 1. Study Help (New AI Chat Interface)
**Steps:**
1. Click "SS1 (Year 10)" to select a class
2. Click "Mathematics" to select a subject
3. Click "Algebra Basics" to select a topic
4. In the chat area, you should see:
   - Empty state with "💡 Welcome to your AI study session"
   - Example prompt buttons ("What is this?", "How do I...?", "Give me an example")
5. Click an example button OR type your own question
6. Watch the loading animation (three bouncing dots)
7. See the AI response appear in a chat bubble
8. Ask another question - messages build up in the chat

**Expected Behavior:**
- Student message appears on the right in blue
- AI response appears on the left in gray with robot icon
- Loading animation lasts ~1.5 seconds
- Message history persists while on same topic
- Chat clears when you select a different topic

### 2. Progress Tracking (localStorage)
**Steps:**
1. In Study Help, ask 5 questions
2. Go to Quiz section and take the quiz
3. Refresh the page (F5 or Cmd+R)
4. Go to Progress section
5. Notice the streak and score values

**Expected Behavior:**
- Streak increases (1 day per 5 questions asked)
- Score updates based on quiz performance
- Values persist after page reload
- Data stored in browser's localStorage

### 3. Quiz System
**Steps:**
1. Select a class, subject, and topic
2. Go to Quiz section
3. Answer all questions
4. Click "Submit quiz"
5. See results with score and feedback
6. Click "Try Again" to retake

**Expected Behavior:**
- Questions display clearly
- Can select radio button options
- Score calculates correctly
- Results show success/good/retry message
- Can retake quiz without losing progress

### 4. Responsive Design
**Steps:**
1. Open on desktop (1920px): See 4-column grids
2. Open on laptop (1440px): See 3-column grids
3. Open on tablet (900px): See 2-column layout
4. Open on mobile (375-560px): See 1-column stacks
5. Test chat bubbles resize properly
6. Test buttons remain clickable

**Tools to Test With:**
- Chrome DevTools (F12, then toggle device toolbar)
- iPhone/iPad (actual devices if available)
- Android devices

### 5. Navigation
**Steps:**
1. Select SS1 → Math → Algebra
2. Click "Back to topics" → Should stay in Math subject
3. Click "Back to subjects" → Should be back at subject selection
4. Select different subject → Topics update
5. Select different class → Everything resets

**Expected Behavior:**
- Navigation is smooth (no errors)
- State is maintained correctly
- Back buttons work as expected
- Selections cascade correctly

### 6. Visual Design
**Check List:**
- [ ] Colors are consistent throughout (blue primary, green accent)
- [ ] Text is readable at normal zoom
- [ ] Cards have proper shadows and styling
- [ ] Buttons have clear hover states
- [ ] Empty states show helpful messages
- [ ] Loading states are clear
- [ ] Chat bubbles are properly styled
- [ ] Icons display correctly

### 7. Keyboard Shortcuts
**Steps:**
1. In Study Help, type a question
2. Press Ctrl+Enter (or Cmd+Enter on Mac)
3. Message should send without clicking button

**Expected Behavior:**
- Message sends on Ctrl+Enter
- Button click also works
- No errors in console

## What to Look For / Troubleshooting

### Good Signs ✅
- Chat messages appear and disappear correctly
- Loading animation smooth and clear
- Page doesn't freeze or lag
- Messages build up in conversation
- Progress values update
- No console errors
- Responsive design works on all devices

### Issues to Report 🔴
- Messages not appearing
- Loading animation missing or frozen
- Page slow or unresponsive
- localStorage not working (test after refresh)
- Chat not sending
- Design looks broken on mobile
- Text too small or too large
- Colors appear different than expected

## Browser Console Test

### To Check for Errors:
1. Open the page
2. Press F12 (or Cmd+Option+I on Mac)
3. Go to "Console" tab
4. Look for red error messages
5. Try each feature and watch for errors

### Common Non-Issues (Ignore):
- CORS warnings about Google Fonts
- Service worker messages
- Deprecation warnings

## Performance Test

### What to Check:
1. Page loads in under 2 seconds
2. Chat response appears after ~1.5 seconds
3. Typing in textarea is smooth
4. No lag when scrolling chat
5. Buttons respond immediately to clicks

## Accessibility Test

### Keyboard Navigation:
1. Press Tab repeatedly
2. All buttons should be focusable
3. Should be able to navigate form without mouse
4. Enter/Space activates buttons

### Screen Reader (if available):
1. Use built-in screen reader (VoiceOver on Mac)
2. Should describe elements properly
3. Chat area should be announced

## Sample Questions to Ask AI

Each demonstrates different response types:

**Definition Question:**
```
"What is algebra?"
Expected: Concise definition
```

**How-To Question:**
```
"How do I solve an equation like 2x + 5 = 13?"
Expected: Step-by-step instructions
```

**Example Question:**
```
"Give me an example of an algebra problem"
Expected: Worked example with solution
```

**Tips Question:**
```
"Why is algebra important?"
Expected: Tips and key points

### All Topics Covered:
- Algebra Basics
- Geometry Fundamentals
- Linear Equations
- Quadratic Equations
- Cell Structure
- Grammar Basics
- Creative Writing
- Photosynthesis

## Success Criteria

The upgrade is successful if:

1. ✅ Chat interface looks modern and professional
2. ✅ AI responses are contextual and helpful
3. ✅ Loading animation appears and looks smooth
4. ✅ Progress persists after page reload
5. ✅ Navigation works smoothly
6. ✅ Responsive design works on all devices
7. ✅ No console errors
8. ✅ Quiz system functions correctly
9. ✅ All buttons are keyboard accessible
10. ✅ Performance is snappy (no lag)

## Feedback Template

If you find issues, include:

```
**Issue:** [What went wrong]
**Steps to Reproduce:** 
1. [Step 1]
2. [Step 2]
3. [Step 3]
**Expected:** [What should happen]
**Actual:** [What actually happened]
**Device:** [Desktop/Tablet/Mobile]
**Browser:** [Chrome/Firefox/Safari/etc]
**Console Errors:** [Any error messages - F12]
```

## Performance Tips

### For Best Experience:
- Use latest browser version
- Clear browser cache if updating (Ctrl+Shift+Delete)
- Disable browser extensions that might interfere
- Use good internet connection for smooth experience
- Test on actual devices for real-world feel

## That's it! 🎉

The app should now feel like a professional, modern educational platform. Enjoy testing!
