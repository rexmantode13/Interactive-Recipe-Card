document.addEventListener('DOMContentLoaded', () => {
    // Recipe Database
    const recipes = {
        'lemon-cake': {
            title: 'Lemon Olive Oil Cake',
            category: 'Classic Dessert',
            description: 'A moist, tender cake infused with fresh citrus and rich, fruity extra-virgin olive oil. Perfect with a light dusting of powdered sugar.',
            image: 'images/dish.png',
            timerText: 'Bake Timer',
            timerSeconds: 45 * 60, // 45 minutes
            meta: {
                prep: '15 mins',
                cook: '45 mins',
                total: '1 hr',
                servings: '8 slices',
                price: '₹ 550'
            },
            ingredients: [
                '1 ½ cups (180g) all-purpose flour',
                '2 tsp baking powder',
                '½ tsp fine sea salt',
                '1 cup (200g) granulated sugar',
                '3 large eggs, room temperature',
                '¾ cup extra-virgin olive oil (good quality)',
                '2 tbsp fresh lemon zest (about 2 lemons)',
                '¼ cup fresh lemon juice',
                '½ cup whole milk or plain yogurt'
            ],
            steps: [
                'Preheat oven to 350°F (175°C). Grease an 8-inch round cake pan with olive oil, then line the bottom with parchment paper and grease the paper.',
                'In a medium bowl, whisk together the flour, baking powder, and sea salt. Set aside.',
                'In a large bowl, rub the lemon zest into the sugar with your fingertips until fragrant. Whisk in the eggs one at a time until pale and slightly thick.',
                'Slowly drizzle in the olive oil while whisking constantly. Whisk in the lemon juice and milk until fully incorporated.',
                'Gently fold the flour mixture into the wet ingredients using a spatula just until combined (do not overmix). Pour the batter into the prepared pan.',
                'Bake for 40 to 45 minutes, or until the top is golden brown and a toothpick inserted in the center comes out clean. Cool in the pan for 15 minutes, then invert onto a wire rack to cool completely.'
            ]
        },
        'rose-kheer': {
            title: 'Cardamom Rose Kheer',
            category: 'Indian Dessert',
            description: 'A luxurious, slow-simmered rice pudding scented with green cardamom, saffron, and sweet rose water, finished with crunchy pistachios.',
            image: 'images/kheer.png',
            timerText: 'Cook Timer',
            timerSeconds: 35 * 60, // 35 minutes
            meta: {
                prep: '10 mins',
                cook: '35 mins',
                total: '45 mins',
                servings: '2 servings',
                price: '₹ 450'
            },
            ingredients: [
                '¼ cup basmati rice (washed and soaked for 30 mins)',
                '4 cups (1 liter) whole milk',
                '½ cup granulated sugar (adjust to taste)',
                '½ tsp green cardamom powder',
                '1 tbsp slivered almonds & pistachios',
                '10-12 saffron strands (soaked in 2 tbsp warm milk)',
                '1 tsp organic rose water',
                'Edible dried rose petals (for garnish)'
            ],
            steps: [
                'Drain the soaked basmati rice. Coarsely crush the grains using your hands or a mortar and pestle. Set aside.',
                'In a heavy-bottomed pan, bring the whole milk to a boil on medium heat, stirring occasionally to prevent burning.',
                'Add the crushed rice to the boiling milk. Lower the heat to a simmer, stirring frequently, until the rice is fully cooked and the milk has reduced to about half its volume (approx 25 minutes).',
                'Stir in the sugar, cardamom powder, and saffron-infused milk. Simmer for another 5-10 minutes until the kheer thickens to a creamy texture.',
                'Remove from heat and fold in the rose water and slivered almonds and pistachios.',
                'Let the kheer cool to room temperature, then chill in the refrigerator. Garnish with additional nuts and dried rose petals before serving cold.'
            ]
        },
        'paneer-tikka': {
            title: 'Tandoori Paneer Tikka',
            category: 'Indian Appetizer',
            description: 'Delectable cubes of paneer marinated in a spiced yogurt blend, skewered with bell peppers and onions, and baked until perfectly charred.',
            image: 'images/paneer.png',
            timerText: 'Bake Timer',
            timerSeconds: 15 * 60, // 15 minutes
            meta: {
                prep: '15 mins',
                cook: '15 mins',
                total: '30 mins',
                servings: '4 servings',
                price: '₹ 650'
            },
            ingredients: [
                '250g paneer (cottage cheese), cut into 1-inch cubes',
                '1 large bell pepper (capsicum), cut into 1-inch squares',
                '1 medium red onion, cut into 1-inch squares',
                '½ cup thick Greek yogurt (hung curd)',
                '1 tbsp ginger-garlic paste',
                '1 tsp Kashmiri red chili powder',
                '½ tsp garam masala',
                '½ tsp kasuri methi (dried fenugreek leaves), crushed',
                '1 tbsp fresh lemon juice',
                '1 tbsp mustard oil (traditional) or olive oil',
                'Salt to taste'
            ],
            steps: [
                'In a large bowl, whisk the yogurt, ginger-garlic paste, chili powder, garam masala, kasuri methi, lemon juice, mustard oil, and salt until smooth.',
                'Add the paneer cubes, bell pepper, and onion squares. Gently toss to coat evenly. Cover and marinate in the refrigerator for at least 30 minutes.',
                'Thread the marinated paneer, pepper, and onion pieces alternately onto metal or soaked wooden skewers.',
                'Preheat your oven or grill to 400°F (200°C). Place the skewers on a baking sheet lined with parchment paper.',
                'Bake or grill for 12-15 minutes, turning the skewers once halfway through, until the paneer edges are lightly charred.',
                'Brush hot tikka skewers with a touch of butter or ghee, sprinkle with chaat masala, and serve hot with mint chutney.'
            ]
        },
        'dal-tadka': {
            title: 'Classic Dal Tadka',
            category: 'Indian Main',
            description: 'Creamy yellow split lentils simmered with turmeric and salt, then tempered with ghee, crackling cumin seeds, garlic, and hot chili powder.',
            image: 'images/dal.png',
            timerText: 'Cook Timer',
            timerSeconds: 25 * 60, // 25 minutes
            meta: {
                prep: '10 mins',
                cook: '25 mins',
                total: '35 mins',
                servings: '2 servings',
                price: '₹ 500'
            },
            ingredients: [
                '1 cup toor dal (yellow split pigeon peas), rinsed',
                '3 cups water (for boiling dal)',
                '½ tsp turmeric powder',
                '1 tsp salt (adjust to taste)',
                '2 tbsp ghee or vegetable oil',
                '1 tsp cumin seeds',
                '4-5 garlic cloves, finely chopped',
                '1 medium onion, finely chopped',
                '1 large tomato, finely chopped',
                '1-2 green chilies, slit lengthwise',
                '1 tsp Kashmiri red chili powder',
                'Pinch of asafoetida (hing)',
                '¼ cup fresh cilantro (coriander) leaves, chopped'
            ],
            steps: [
                'In a pressure cooker or pot, combine rinsed toor dal, water, turmeric powder, and salt. Cook until soft and mushy (about 15-20 minutes). Whisk lightly.',
                'In a separate pan, heat 1.5 tablespoons of ghee or oil. Add cumin seeds and let them splutter.',
                'Add chopped garlic and green chilies. Sauté for a minute until the garlic turns golden brown.',
                'Add chopped onions and sauté until translucent. Add chopped tomatoes and cook until soft and mushy.',
                'Pour the cooked dal into the pan with the onion-tomato mixture. Stir well and simmer on low heat for 5 minutes. Adjust consistency with warm water if needed.',
                'Prepare the tempering (tadka): Heat the remaining 1/2 tablespoon of ghee in a small ladle. Add a pinch of hing and Kashmiri chili powder, and immediately pour it over the hot dal. Stir slightly and garnish with chopped cilantro.'
            ]
        },
        'butter-chicken': {
            title: 'Butter Chicken',
            category: 'Indian Main',
            description: 'Tender pieces of grilled tandoori chicken simmered in a velvety, spiced tomato-butter sauce, finished with fresh cream and dried fenugreek leaves.',
            image: 'images/butter-chicken.png',
            timerText: 'Cook Timer',
            timerSeconds: 30 * 60, // 30 minutes
            meta: {
                prep: '20 mins',
                cook: '30 mins',
                total: '50 mins',
                servings: '2 servings',
                price: '₹ 850'
            },
            ingredients: [
                '800g boneless chicken thighs, cut into bite-sized pieces',
                '½ cup thick yogurt (hung curd)',
                '1 ½ tbsp ginger-garlic paste',
                '1 tbsp Kashmiri red chili powder',
                '1 tsp garam masala',
                'Salt to taste',
                '3 tbsp butter & 2 tbsp oil',
                '1 large onion, finely chopped',
                '1 ½ cups canned tomato puree or fresh tomato paste',
                '1 cup heavy cream',
                '1 tbsp kasuri methi (dried fenugreek leaves), crushed',
                '1 tsp sugar (to balance acidity)',
                'Fresh cilantro (coriander) leaves (for garnish)'
            ],
            steps: [
                'In a bowl, mix yogurt, half of the ginger-garlic paste, half of the chili powder, half of the garam masala, salt, and chicken. Marinate for at least 1 hour.',
                'Heat oil in a pan and sear the marinated chicken pieces on high heat for 3-4 minutes on each side until charred and cooked through. Set aside.',
                'In the same pan, melt 1 tablespoon of butter. Sauté the chopped onions and the remaining ginger-garlic paste until golden and soft.',
                'Add the tomato puree, remaining chili powder, garam masala, salt, and sugar. Simmer for 10 minutes until the sauce thickens and releases oil.',
                'Stir in the heavy cream and the remaining butter. Bring to a gentle simmer, then add the cooked chicken pieces along with any juices.',
                'Cook for 5-8 minutes until chicken is tender. Sprinkle with crushed kasuri methi, garnish with a splash of cream and fresh cilantro, and serve with naan.'
            ]
        }
    };

    // State Variables
    let activeRecipeId = 'lemon-cake';
    let currentStep = 0; // 0 means cooking has not started

    // DOM Elements Mapping
    const tabs = document.querySelectorAll('.selector-tab');
    const recipeCategory = document.getElementById('recipe-category');
    const recipeTitle = document.getElementById('recipe-title');
    const recipeDescription = document.getElementById('recipe-description');
    const recipeImage = document.getElementById('recipe-image');
    
    const metaPrep = document.getElementById('meta-prep');
    const metaCook = document.getElementById('meta-cook');
    const metaTotal = document.getElementById('meta-total');
    const metaServings = document.getElementById('meta-servings');
    const metaPrice = document.getElementById('meta-price');
    
    const ingredientsList = document.getElementById('ingredients-list');
    const instructionsList = document.getElementById('instructions-list');
    
    const toggleIngredientsBtn = document.getElementById('toggle-ingredients');
    const ingredientsWrapper = document.getElementById('ingredients-wrapper');
    const toggleInstructionsBtn = document.getElementById('toggle-instructions');
    const instructionsWrapper = document.getElementById('instructions-wrapper');
    
    const startCookingBtn = document.getElementById('btn-start-cooking');
    const cookingNavigation = document.getElementById('cooking-navigation');
    const prevStepBtn = document.getElementById('btn-prev-step');
    const nextStepBtn = document.getElementById('btn-next-step');
    const resetCookingBtn = document.getElementById('btn-reset-cooking');
    
    const progressContainer = document.getElementById('cooking-progress-container');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressStepCounter = document.getElementById('progress-step-counter');

    const timerDisplay = document.getElementById('timer-display');
    const timerHeaderTitle = document.querySelector('.timer-header h3');
    const timerStartBtn = document.getElementById('btn-timer-start');
    const timerPauseBtn = document.getElementById('btn-timer-pause');
    const timerResetBtn = document.getElementById('btn-timer-reset');
    const printRecipeBtn = document.getElementById('btn-print-recipe');
    
    let timerSecondsLeft = 0;
    let timerInterval = null;

    // Section Accordion Toggles
    function toggleSection(button, wrapper, showText, hideText) {
        const isOpen = wrapper.classList.toggle('is-open');
        button.setAttribute('aria-expanded', isOpen);
        
        const indicator = button.querySelector('.toggle-indicator');
        if (indicator) {
            indicator.textContent = isOpen ? '−' : '+';
        }
        
        const labelSpan = button.querySelector('span');
        if (labelSpan) {
            labelSpan.textContent = isOpen ? hideText : showText;
        }
    }

    toggleIngredientsBtn.addEventListener('click', () => {
        toggleSection(toggleIngredientsBtn, ingredientsWrapper, 'Show Ingredients', 'Hide Ingredients');
    });

    toggleInstructionsBtn.addEventListener('click', () => {
        toggleSection(toggleInstructionsBtn, instructionsWrapper, 'Show Steps', 'Hide Steps');
    });

    // Dynamic Rendering Engine
    function loadRecipe(recipeId) {
        const recipe = recipes[recipeId];
        if (!recipe) return;

        activeRecipeId = recipeId;
        resetCooking();

        // Fade out content blocks prior to rendering
        const animContainers = [
            document.querySelector('.recipe-header'),
            document.querySelector('.recipe-image-container'),
            document.querySelector('.recipe-grid')
        ];
        
        animContainers.forEach(container => {
            if (container) container.classList.add('fade-out');
        });

        // Update elements after fade-out transition
        setTimeout(() => {
            recipeCategory.textContent = recipe.category;
            recipeTitle.textContent = recipe.title;
            recipeDescription.textContent = recipe.description;
            
            metaPrep.textContent = recipe.meta.prep;
            metaCook.textContent = recipe.meta.cook;
            metaTotal.textContent = recipe.meta.total;
            metaServings.textContent = recipe.meta.servings;
            metaPrice.textContent = recipe.meta.price;

            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.title;

            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach((ing) => {
                const li = document.createElement('li');
                li.className = 'ingredient-item';
                li.innerHTML = `
                    <label class="checkbox-container">
                        <input type="checkbox" class="ingredient-checkbox">
                        <span class="checkmark"></span>
                        <span class="ingredient-text">${ing}</span>
                    </label>
                `;
                ingredientsList.appendChild(li);
            });

            instructionsList.innerHTML = '';
            recipe.steps.forEach((step, index) => {
                const li = document.createElement('li');
                li.className = 'step-item';
                li.setAttribute('data-step', index + 1);
                li.innerHTML = `
                    <div class="step-number">${index + 1}</div>
                    <div class="step-body">
                        <p class="step-text">${step}</p>
                    </div>
                `;
                instructionsList.appendChild(li);
            });

            timerHeaderTitle.textContent = recipe.timerText;
            timerSecondsLeft = recipe.timerSeconds;
            updateTimerDisplay();

            // Fade back in elements
            animContainers.forEach(container => {
                if (container) container.classList.remove('fade-out');
            });
        }, 200);
    }

    // Recipe Tab Navigation
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const recipeId = tab.getAttribute('data-recipe-id');
            loadRecipe(recipeId);
        });
    });

    // Cooking Steps Progress & Navigation
    function getActiveSteps() {
        return instructionsList.querySelectorAll('.step-item');
    }

    function updateProgress() {
        const activeSteps = getActiveSteps();
        const totalSteps = activeSteps.length;

        if (currentStep === 0) {
            progressBarFill.style.width = '0%';
            progressPercentage.textContent = '0%';
            progressStepCounter.textContent = 'Cooking Progress';
            return;
        }

        const displayStep = Math.min(currentStep, totalSteps);
        const percentage = Math.round((displayStep / totalSteps) * 100);
        progressBarFill.style.width = `${percentage}%`;
        progressPercentage.textContent = `${percentage}%`;

        if (currentStep > totalSteps) {
            progressStepCounter.textContent = 'Completed!';
        } else {
            progressStepCounter.textContent = `Step ${displayStep} of ${totalSteps}`;
        }
    }

    function highlightStep() {
        const activeSteps = getActiveSteps();
        activeSteps.forEach((item, index) => {
            const stepNum = index + 1;
            item.classList.remove('is-active', 'is-completed');

            if (stepNum === currentStep) {
                item.classList.add('is-active');
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else if (stepNum < currentStep) {
                item.classList.add('is-completed');
            }
        });
    }

    function startCooking() {
        currentStep = 1;
        
        // Auto-expand steps if collapsed
        if (!instructionsWrapper.classList.contains('is-open')) {
            toggleSection(toggleInstructionsBtn, instructionsWrapper, 'Show Steps', 'Hide Steps');
        }

        progressContainer.style.display = 'block';
        cookingNavigation.style.display = 'flex';
        startCookingBtn.style.display = 'none';

        highlightStep();
        updateProgress();
        
        prevStepBtn.disabled = true;
        
        const totalSteps = getActiveSteps().length;
        if (currentStep === totalSteps) {
            nextStepBtn.textContent = 'Finish';
        } else {
            nextStepBtn.textContent = 'Next Step';
        }
        nextStepBtn.disabled = false;
        startTimer();
    }

    function nextStep() {
        const totalSteps = getActiveSteps().length;

        if (currentStep < totalSteps) {
            currentStep++;
            highlightStep();
            updateProgress();
            prevStepBtn.disabled = false;

            if (currentStep === totalSteps) {
                nextStepBtn.textContent = 'Finish';
            }
        } else if (currentStep === totalSteps) {
            currentStep++;
            updateProgress();
            
            const activeSteps = getActiveSteps();
            activeSteps.forEach(item => {
                item.classList.remove('is-active');
                item.classList.add('is-completed');
            });

            nextStepBtn.textContent = 'Completed!';
            nextStepBtn.disabled = true;
            pauseTimer();
        }
    }

    function prevStep() {
        const totalSteps = getActiveSteps().length;

        if (currentStep > 1) {
            currentStep--;
            highlightStep();
            updateProgress();
            nextStepBtn.disabled = false;
            
            if (currentStep === totalSteps) {
                nextStepBtn.textContent = 'Finish';
            } else {
                nextStepBtn.textContent = 'Next Step';
            }

            if (currentStep === 1) {
                prevStepBtn.disabled = true;
            }
        }
    }

    function resetCooking() {
        currentStep = 0;
        
        const activeSteps = getActiveSteps();
        activeSteps.forEach(item => {
            item.classList.remove('is-active', 'is-completed');
        });

        progressContainer.style.display = 'none';
        cookingNavigation.style.display = 'none';
        startCookingBtn.style.display = 'inline-flex';

        updateProgress();
        resetTimer();
    }

    startCookingBtn.addEventListener('click', startCooking);
    nextStepBtn.addEventListener('click', nextStep);
    prevStepBtn.addEventListener('click', prevStep);
    resetCookingBtn.addEventListener('click', resetCooking);

    // Kitchen Timer Controls
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        timerDisplay.textContent = formatTime(timerSecondsLeft);
    }

    function startTimer() {
        if (timerInterval) return; // Guard against multiple intervals

        timerInterval = setInterval(() => {
            if (timerSecondsLeft > 0) {
                timerSecondsLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                timerDisplay.textContent = "00:00";
                
                const recipe = recipes[activeRecipeId];
                alert(`${recipe.title} ${recipe.timerText.toLowerCase()} complete!`);
                
                timerStartBtn.disabled = false;
                timerPauseBtn.disabled = true;
            }
        }, 1000);

        timerStartBtn.disabled = true;
        timerPauseBtn.disabled = false;
    }

    function pauseTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        timerStartBtn.disabled = false;
        timerPauseBtn.disabled = true;
    }

    function resetTimer() {
        pauseTimer();
        const recipe = recipes[activeRecipeId];
        timerSecondsLeft = recipe ? recipe.timerSeconds : 45 * 60;
        updateTimerDisplay();
    }

    timerStartBtn.addEventListener('click', startTimer);
    timerPauseBtn.addEventListener('click', pauseTimer);
    timerResetBtn.addEventListener('click', resetTimer);

    // Ingredient Checklist Strike-through
    ingredientsList.addEventListener('change', (e) => {
        if (e.target.classList.contains('ingredient-checkbox')) {
            const label = e.target.closest('.checkbox-container');
            if (e.target.checked) {
                label.classList.add('is-checked');
            } else {
                label.classList.remove('is-checked');
            }
        }
    });

    // Print Handler
    printRecipeBtn.addEventListener('click', () => {
        window.print();
    });

    // Initial Load
    loadRecipe('lemon-cake');
});
