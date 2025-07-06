const initialRecipes = [
    {
        id: 1,
        title: "Classic Pancakes",
        category: "Breakfast",
        image: "", // Image will be assigned dynamically
        ingredients: [
            "1 cup flour",
            "2 tbsp sugar",
            "1 cup milk",
            "1 egg",
            "2 tbsp butter",
            "1 tsp baking powder",
            "Pinch of salt"
        ],
        steps: [
            "Mix dry ingredients in a bowl.",
            "Whisk in milk, egg, and melted butter.",
            "Pour batter onto a hot griddle.",
            "Cook until bubbles form, flip, and cook until golden."
        ]
    },
                    
    {
        id: 2,
        title: "Spaghetti Carbonara",
        category: "Lunch",
        image: "", // Image will be assigned dynamically
        ingredients: [
            "200g spaghetti",
            "2 eggs",
            "50g parmesan cheese",
            "100g pancetta",
            "2 cloves garlic",
            "Salt & pepper"
        ],
        steps: [
            "Cook spaghetti until al dente.",
            "Fry pancetta and garlic.",
            "Mix eggs and cheese in a bowl.",
            "Combine everything off heat, season, and serve."
        ]
    },
    {
        id: 3,
        title: "Chocolate Chip Cookies",
        category: "Desserts",
        image: "", // Image will be assigned dynamically
        ingredients: [
            "1 cup butter",
            "1 cup sugar",
            "2 cups flour",
            "2 eggs",
            "1 tsp vanilla",
            "1 cup chocolate chips"
        ],
        steps: [
            "Cream butter and sugar.",
            "Add eggs and vanilla.",
            "Mix in flour, then chocolate chips.",
            "Scoop onto tray and bake at 180°C for 12 min."
        ]
    },
    {
        id: 4,
        title: "Chicken Caesar Salad",
        category: "Salads",
        image: "", // Image will be assigned dynamically
        ingredients: [
            "2 chicken breasts",
            "1 head romaine lettuce",
            "1 cup croutons",
            "1/2 cup Parmesan cheese, grated",
            "Caesar dressing"
        ],
        steps: [
            "Grill or pan-fry chicken breasts until cooked through. Let cool and slice.",
            "Wash and chop romaine lettuce.",
            "In a large bowl, combine lettuce, croutons, and Parmesan cheese.",
            "Add sliced chicken and drizzle with Caesar dressing. Toss to combine."
        ]
    },
    {
        id: 5,
        title: "Tomato Soup",
        category: "Soups",
        image: "", // Image will be assigned dynamically
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 can (28 oz) crushed tomatoes",
            "4 cups vegetable broth",
            "1/2 cup heavy cream (optional)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Heat olive oil in a large pot or Dutch oven over medium heat.",
            "Add onion and cook until softened, about 5 minutes.",
            "Stir in garlic and cook for 1 minute more.",
            "Pour in crushed tomatoes and vegetable broth. Season with salt and pepper.",
            "Bring to a simmer, then reduce heat and cook for 15-20 minutes.",
            "If desired, stir in heavy cream. Use an immersion blender to blend until smooth, or carefully transfer to a blender."
        ]
    },
    {
        id: 6,
        title: "Fresh Lemonade",
        category: "Drinks",
        image: "", // Image will be assigned dynamically
        ingredients: [
            "1 cup fresh lemon juice (about 4-6 lemons)",
            "1 cup granulated sugar (or to taste)",
            "4 cups cold water",
            "Ice cubes",
            "Lemon slices for garnish"
        ],
        steps: [
            "In a small saucepan, combine sugar and 1 cup of water. Heat over medium heat, stirring until the sugar is completely dissolved. This is your simple syrup.",
            "Remove from heat and let the simple syrup cool.",
            "In a large pitcher, combine the cooled simple syrup, fresh lemon juice, and the remaining 3 cups of cold water.",
            "Stir well to combine.",
            "Taste and adjust sweetness if necessary by adding more sugar or water.",
            "Serve over ice with lemon slices for garnish."
        ]
    },
    {
        id: 7,
        title: "Guacamole",
        category: "Snacks",
        image: "", // Image will be assigned dynamically
        ingredients: [
            "3 ripe avocados",
            "1/2 small onion, finely chopped",
            "1-2 jalapeños, minced (seeds removed for less heat)",
            "1/2 cup cilantro, chopped",
            "2 tbsp lime juice",
            "1/2 tsp salt, or to taste"
        ],
        steps: [
            "Cut avocados in half, remove pits, and scoop flesh into a bowl.",
            "Mash avocados with a fork to desired consistency.",
            "Add chopped onion, jalapeños, cilantro, lime juice, and salt.",
            "Stir gently to combine all ingredients.",
            "Taste and adjust seasoning if necessary. Serve immediately with tortilla chips or your favorite dippers."
        ]
    },
    {
        id: 8,
        title: "Veggie Stir Fry",
        category: "Dinner",
        image: "", // Image will be assigned dynamically
        ingredients: ["2 cups mixed vegetables", "1 tbsp soy sauce", "1 tsp sesame oil", "1 garlic clove, minced", "1 tsp ginger, grated", "Salt & pepper"],
        steps: ["Heat oil in a wok.", "Add garlic and ginger, stir-fry for 30 seconds.", "Add vegetables and stir-fry until crisp-tender.", "Add soy sauce, toss, and serve."]
    },
    {
        id: 9,
        title: "Berry Smoothie",
        category: "Drinks",
        image: "", // Image will be assigned dynamically
        ingredients: ["1 cup mixed berries", "1 banana", "1/2 cup yogurt", "1/2 cup milk", "1 tbsp honey"],
        steps: ["Combine all ingredients in a blender.", "Blend until smooth.", "Pour into a glass and enjoy."]
    },
    {
        id: 10,
        title: "Garlic Bread",
        category: "Snacks",
        image: "", // Image will be assigned dynamically
        ingredients: ["1 baguette", "3 tbsp butter", "2 garlic cloves, minced", "1 tbsp parsley, chopped", "Salt"],
        steps: ["Preheat oven to 180°C.", "Mix butter, garlic, parsley, and salt.", "Slice baguette, spread mixture, bake 10 min."]
    },
    {
        id: 11,
        title: "Vanilla Ice Cream",
        category: "Ice Cream",
        image: "../images/vanilla-ice-cream.jpg",
        ingredients: ["2 cups heavy cream", "1 cup whole milk", "3/4 cup sugar", "1 tbsp vanilla extract"],
        steps: ["Whisk together cream, milk, sugar, and vanilla until sugar dissolves.", "Pour into ice cream maker and churn according to manufacturer's instructions.", "Freeze until firm and enjoy!"]
    },
    {
        id: 12,
        title: "Strawberry Ice Cream",
        category: "Ice Cream",
        image: "../images/strawberry-ice-cream.jpg",
        ingredients: ["2 cups strawberries, chopped", "2 cups heavy cream", "1 cup whole milk", "3/4 cup sugar"],
        steps: ["Blend strawberries with sugar until smooth.", "Mix with cream and milk.", "Churn in ice cream maker and freeze until set."]
    }

    ];

// Helper function to get recipe image path based on category
function getRecipeImagePath(category) {
    const formattedCategory = category.toLowerCase().replace(/ /g, '-');
    return `../images/${formattedCategory}.jpg`;
}

// Recipe Generator Script
document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    if (recipeForm) {
        recipeForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const recipeName = document.getElementById('recipe-name').value;
            const recipeOutput = document.getElementById('recipe-output');
            const errorMessage = document.getElementById('error-message');

            recipeOutput.innerHTML = ''; // Clear previous recipe
            errorMessage.textContent = ''; // Clear previous error

            try {
                const response = await fetch('/generate-recipe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ query: recipeName })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch recipe');
                }

                const recipe = await response.json();

                let html = `<h2>${recipeName}</h2>`;

                if (recipe.ingredients && recipe.ingredients.length > 0) {
                    html += `<h3>Ingredients:</h3><ul>`;
                    recipe.ingredients.forEach(ingredient => {
                        html += `<li>${ingredient}</li>`;
                    });
                    html += `</ul>`;
                }

                if (recipe.steps && recipe.steps.length > 0) {
                    html += `<h3>Steps:</h3><ol>`;
                    recipe.steps.forEach(step => {
                        html += `<li>${step}</li>`;
                    });
                    html += `</ol>`;
                }

                recipeOutput.innerHTML = html;
            } catch (error) {
                errorMessage.textContent = `Error: ${error.message}`;
                console.error('Error:', error);
            }
        });
    }
});


let recipes = JSON.parse(localStorage.getItem('recipes')) || initialRecipes;



// Favorite recipes logic
let favoriteIds = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

function toggleFavorite(id) {
    if (favoriteIds.includes(id)) {
        favoriteIds = favoriteIds.filter(fid => fid !== id);
    } else {
        favoriteIds.push(id);
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteIds));
    renderFeaturedRecipes();

    // Update the favorite icon on the current page without re-rendering the entire category
    const favoriteIconElement = document.querySelector(`.favorite-icon[onclick*="toggleFavorite(${id})"]`);
    if (favoriteIconElement) {
        favoriteIconElement.innerHTML = isFavorite(id) ? '❤️' : '🤍';
    }
}

function isFavorite(id) {
    return favoriteIds.includes(id);
}

function deleteRecipe(id) {
    // Filter out the recipe to be deleted
    recipes = recipes.filter(r => r.id !== id);
    // Also remove from favorites if it was a favorite
    favoriteIds = favoriteIds.filter(fid => fid !== id);
    // Update localStorage
    localStorage.setItem('recipes', JSON.stringify(recipes));
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteIds));
    // Re-render the custom recipes list
    renderCustomRecipes();
    alert('Recipe deleted successfully!');
}

// Update renderFeaturedRecipes to show favorites
function renderFeaturedRecipes() {
    const container = document.querySelector('.recipe-cards');
    if (!container) return;
    // Show favorites first, then others
    const favs = recipes.filter(r => isFavorite(r.id));
    const others = recipes.filter(r => !isFavorite(r.id));
    const toShow = [...favs, ...others].slice(0, 3);
    container.innerHTML = toShow.map(recipe => `
        <div class="recipe-card">
            <div class="card-content">
                <img src="${getRecipeImagePath(recipe.category)}" alt="${recipe.title}" class="recipe-card-image">
                <div class="card-content">
                    <h3>${recipe.title} <span class="favorite-icon" onclick="toggleFavorite(${recipe.id});event.stopPropagation();" style="cursor:pointer;">${isFavorite(recipe.id) ? '❤️' : '🤍'}</span></h3>
                    <p><strong>Category:</strong> ${recipe.category}</p>
                    <a href="#" class="view-recipe-btn" onclick="showRecipeDetail(${recipe.id});return false;">View Recipe</a>
                </div>
            </div>
    `).join('');
}

// Add user recipe submission
let editingRecipeId = null;

function openRecipeModal(recipe = null) {
    const modal = document.getElementById('recipe-modal');
    const form = document.getElementById('addRecipeForm');
    const titleInput = document.getElementById('recipeTitle');
    const categorySelect = document.getElementById('recipeCategorySelect');
    const newCategoryInput = document.getElementById('newCategoryInput');
    const toggleNewCategoryBtn = document.getElementById('toggleNewCategoryInput');
    const ingredientsInput = document.getElementById('recipeIngredients');
    const stepsInput = document.getElementById('recipeSteps');

    // Populate existing categories
    const categories = [...new Set(recipes.map(r => r.category))];
    categorySelect.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    categorySelect.innerHTML += `<option value="_new_">Create New Category</option>`;

    // Reset form and editing state
    form.reset();
    editingRecipeId = null;
    newCategoryInput.style.display = 'none';
    newCategoryInput.value = '';
    categorySelect.style.display = 'inline-block';
    toggleNewCategoryBtn.textContent = 'New Category';

    if (recipe) {
        editingRecipeId = recipe.id;
        titleInput.value = recipe.title;
        ingredientsInput.value = recipe.ingredients.join('\n');
        stepsInput.value = recipe.steps.join('\n');
        if (categories.includes(recipe.category)) {
            categorySelect.value = recipe.category;
        } else {
            categorySelect.value = '_new_';
            newCategoryInput.style.display = 'inline-block';
            newCategoryInput.value = recipe.category;
            toggleNewCategoryBtn.textContent = 'Select Existing';
        }
    }

    modal.style.display = 'block';
}

function closeRecipeModal() {
    document.getElementById('recipe-modal').style.display = 'none';
}

function setupRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    const closeButton = modal.querySelector('.close-button');
    const addRecipeBtn = document.getElementById('add-new-custom-recipe-btn');
    const form = document.getElementById('addRecipeForm');
    const categorySelect = document.getElementById('recipeCategorySelect');
    const newCategoryInput = document.getElementById('newCategoryInput');
    const toggleNewCategoryBtn = document.getElementById('toggleNewCategoryInput');

    if (addRecipeBtn) {
        addRecipeBtn.addEventListener('click', () => openRecipeModal());
    }
    if (closeButton) {
        closeButton.addEventListener('click', closeRecipeModal);
    }
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeRecipeModal();
        }
    });

    if (toggleNewCategoryBtn) {
        toggleNewCategoryBtn.addEventListener('click', () => {
            if (newCategoryInput.style.display === 'none') {
                newCategoryInput.style.display = 'inline-block';
                categorySelect.style.display = 'none';
                toggleNewCategoryBtn.textContent = 'Select Existing';
                newCategoryInput.focus();
            } else {
                newCategoryInput.style.display = 'none';
                categorySelect.style.display = 'inline-block';
                toggleNewCategoryBtn.textContent = 'New Category';
            }
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', () => {
            if (categorySelect.value === '_new_') {
                newCategoryInput.style.display = 'inline-block';
                newCategoryInput.value = ''; // Clear new category input
                newCategoryInput.focus();
                toggleNewCategoryBtn.textContent = 'Select Existing';
            } else {
                newCategoryInput.style.display = 'none';
                newCategoryInput.value = '';
                toggleNewCategoryBtn.textContent = 'New Category';
            }
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('recipeTitle').value;
            let category;
            if (newCategoryInput.style.display === 'inline-block') {
                category = newCategoryInput.value.trim();
            } else {
                category = categorySelect.value;
            }

            const ingredients = document.getElementById('recipeIngredients').value
                .split('\n').map(item => item.trim()).filter(item => item !== '');
            const steps = document.getElementById('recipeSteps').value
                .split('\n').map(item => item.trim()).filter(item => item !== '');

            if (!title || !category || ingredients.length === 0 || steps.length === 0) {
                alert('Please fill in all required fields.');
                return;
            }

            if (editingRecipeId) {
                // Editing existing recipe
                const index = recipes.findIndex(r => r.id === editingRecipeId);
                if (index !== -1) {
                    recipes[index] = {
                        ...recipes[index],
                        title,
                        category,
                        ingredients,
                        steps
                    };
                    localStorage.setItem('recipes', JSON.stringify(recipes));
                    alert('Recipe updated successfully!');
                }
            } else {
                // Adding new recipe
                const newRecipe = {
                    id: recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1,
                    title,
                    category,
                    ingredients,
                    steps
                };
                recipes.push(newRecipe);
                localStorage.setItem('recipes', JSON.stringify(recipes));
                alert('Recipe added successfully!');
            }

            closeRecipeModal();
            renderCustomRecipes(); // Re-render the list after adding/editing
            renderCategories(); // Re-render categories in case a new one was added
        });
    }
}

function editRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    if (recipe) {
        openRecipeModal(recipe);
    }
}




function renderCategoryRecipes(category) {
    const container = document.getElementById('category-recipes-container');
    if (!container) return;

    const filteredRecipes = category
        ? recipes.filter(r => r.category === category)
        : recipes;

    if (!filteredRecipes.length) {
        container.innerHTML = `<p>No recipes found for ${category || 'any category'}.</p>`;
        return;
    }

    // Render all recipe cards as innerHTML
    container.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card">
            <div class="card-content">
                <h3>
                    ${recipe.title}
                    <span class="favorite-icon" onclick="toggleFavorite(${recipe.id}); event.stopPropagation();" style="cursor: pointer;">
                        ${isFavorite(recipe.id) ? '❤️' : '🤍'}
                    </span>
                </h3>
                <p><strong>Category:</strong> ${recipe.category}</p>
                <a href="#" class="view-recipe-btn" onclick="showRecipeDetail(${recipe.id}); return false;">View Recipe</a>
                <button class="delete-recipe-btn" onclick="deleteRecipe(${recipe.id})">Delete Recipe</button>
            </div>
        </div>
    `).join('');
}

        
function renderCategories() {
    const container = document.getElementById('category-grid');
    if (!container) return;

    const categories = [...new Set(recipes.map(recipe => recipe.category))];

    container.innerHTML = categories.map(category => `
        <div class="category-card">
            <img src="${getRecipeImagePath(category)}" alt="${category}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%; margin-bottom: 10px;">
            <h3>${category}</h3>
            <a href="category.html?category=${encodeURIComponent(category)}" class="view-recipes-btn">View Recipes</a>
            <button onclick="deleteCategory('${category}')" class="delete-category-btn">Delete Category</button>
        </div>
    `).join('');
}

        // Patch categories.html filterByCategory to use new function
        if (typeof window !== 'undefined') {
            window.filterByCategory = renderCategoryRecipes;
        }

function deleteCategory(categoryToDelete) {
    if (confirm(`Are you sure you want to delete the category '${categoryToDelete}' and all its recipes? This action cannot be undone.`)) {
        recipes = recipes.filter(recipe => recipe.category !== categoryToDelete);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        renderCategories();
        alert(`Category '${categoryToDelete}' and all its recipes have been deleted.`);
    }
}
        
        function showRecipeDetail(id) {
            const recipe = recipes.find(r => r.id === id);
            if (!recipe) return;
            const main = document.querySelector('main');
            main.innerHTML = `
                <section class="recipe-detail">
                    <h2>${recipe.title}</h2>
                    <h3>Ingredients</h3>
                    <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
                    <h3>Instructions</h3>
                    <ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
                    <button onclick="window.location.reload()">Back to Home</button>
                </section>
            `;
        }
        
        document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('index.html')) {
        renderFeaturedRecipes();
    } else if (window.location.pathname.includes('categories.html')) {
        // Only run category-specific logic on categories.html
        if (document.getElementById('category-grid')) {
            renderCategories();
        }
    } else if (window.location.pathname.includes('category.html')) {
        // This part is handled by the inline script in category.html
        // No need to call renderCategoryRecipes here directly
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setupRecipeModal();
});
