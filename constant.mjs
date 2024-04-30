// noinspection SpellCheckingInspection
function convertModelsMapToTreeOptions(modelsMap) {
    const convertToModels = (obj, parentPath = '') => {
        if (Array.isArray(obj)) {
            return obj.map((item, index) => {
                if (typeof item === 'string') {
                    const key = `${parentPath}/${item}-${index}`;
                    return {
                        title: item,
                        value: item,
                        key: key,
                    };
                } else {
                    return convertToModels(item, parentPath);
                }
            });
        } else {
            return Object.entries(obj).map(([key, value], index) => {
                const currentPath = `${parentPath}/${key}`;
                return {
                    title: key,
                    value: currentPath,
                    key: `${currentPath}-${index}`,
                    children: convertToModels(value, currentPath),
                };
            });
        }
    };

    return modelsMap.map((provider, index) => {
        const path = provider.name;
        return {
            title: provider.name,
            value: provider.name,
            key: `${path}-${index}`,
            children: convertToModels(provider.models, path),
        };
    });
}

// --> {label: "model_name", value: "model_name"}[]
function convertModelsMapToOptions(modelsMap) {
    const extractModelNames = (obj) => {
        if (Array.isArray(obj)) {
            return obj.map((item) => {
                return {
                    label: item,
                    value: item,
                };
            });
        } else {
            let models = [];
            for (const value of Object.values(obj)) {
                models = models.concat(extractModelNames(value));
            }
            return models;
        }
    };

    return modelsMap.flatMap((provider) => {
        return extractModelNames(provider.models);
    });
}

export const MODELS_MAP = [
    {
        name: "OpenAI",
        doc_url: "https://openai.com/docs/models",
        models: {
            "Chat": {
                "gpt-3.5-*": [
                    "gpt-3.5-turbo",
                    "gpt-3.5-turbo-0301",
                    "gpt-3.5-turbo-0613",
                    "gpt-3.5-turbo-16k",
                    "gpt-3.5-turbo-16k-0613",
                    "gpt-3.5-turbo-1106",
                    "gpt-3.5-turbo-0125",
                    "gpt-3.5-turbo-instruct"
                ],
                "gpt-4-*": [
                    "gpt-4",
                    "gpt-4-0314",
                    "gpt-4-0613",
                    "gpt-4-32k",
                    "gpt-4-32k-0314",
                    "gpt-4-32k-0613",
                    "gpt-4-1106-preview",
                    "gpt-4-0125-preview",
                    "gpt-4-turbo-preview",
                    "gpt-4-vision-preview",
                    "gpt-4-turbo",
                    "gpt-4-turbo-2024-04-09"
                ]
            },
            "Embeddings": [
                "text-embedding-ada-002",
                "text-embedding-3-small",
                "text-embedding-3-large",
                "text-davinci-003",
                "text-davinci-002",
                "text-curie-001",
                "text-babbage-001",
                "text-ada-001",
                "text-davinci-edit-001",
                "code-davinci-edit-001",
            ],
            "Moderation": [
                "text-moderation-latest",
                " text-moderation-stable",
                "text-moderation-007",
            ],
            "DALL-E": [
                "dall-e-2",
                "dall-e-3"
            ],
            "TTS": [
                "tts-1",
                "tts-1-1106",
                "tts-1-hd",
                "tts-1-hd-1106"
            ],
            "Whisper": [
                "whisper-1"
            ],
            "GPT base": [
                "davinci-002",
                "babbage-002"
            ],
            "Plus": [
                "gpt-4-gizmo-*",
                "gpt-4-all"
            ]
        }
    },
    {
        name: "Google",
        doc_url: "https://ai.google.dev",
        models: {
            "Gemma": [
                "gemma-2b-it",
                "gemma-7b-it",
            ],
            "Gemini": [
                "gemini-pro",
                "gemini-pro-1.5",
                "gemini-pro-vision",
            ],
            "PaLM": [
                "PaLM-2",
            ],
            "Search": [
                "search-serper",
            ]
        }
    },
    {
        name: "Anthropic",
        doc_url: "https://docs.anthropic.com/claude/docs/models-overview",
        models: {
            "Claude 1": [
                "claude-instant-1",
                "claude-instant-1.2"
            ],
            "Claude 2": [
                "claude-2",
                "claude-2.1",
                "claude-2.0"
            ],
            "Claude 3": [
                "claude-3-haiku-20240307",
                "claude-3-sonnet-20240229",
                "claude-3-opus-20240229"
            ]
        }
    },
    {
        name: "Baidu",
        doc_url: "https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Nlks5zkzu",
        models: {
            "Chat": [
                "ERNIE-Bot",
                "ERNIE-Bot-turbo",
                "ERNIE-Bot-4",
                "ERNIE-4.0-8K",
                "ERNIE-4.0-8K-Preview",
                "ERNIE-4.0-8K-0104",
                "ERNIE-3.5-8K",
                "ERNIE-3.5-8K-0205",
                "ERNIE-3.5-8K-1222",
                "ERNIE-3.5-4K-0205",
                "ERNIE-3.5-8K-Preview",
                "ERNIE-Speed-8K",
                "ERNIE-Speed-128K",
                "ERNIE-Character-8K-0321",
                "ERNIE-Lite-8K-0922",
                "ERNIE-Lite-8K-0308",
                "ERNIE-Lite-8K-0725",
                "ERNIE-Lite-4K-0704",
                "ERNIE-Lite-4K-0516",
                "ERNIE-Functions-8K-0321",
                "ERNIE-Tiny-8K",
                "ERNIE Speed-AppBuilder",
                "Qianfan-Chinese-Llama-2-7B",
                "Qianfan-Chinese-Llama-2-7B-32K",
                "Qianfan-Chinese-Llama-2-13B-v2",
                "Qianfan-Chinese-Llama-2-13B-v1",
                "Qianfan-Chinese-Llama-2-70B",
                "Qianfan-Llama-2-70B-compressed"
            ],
            "Embeddings": [
                " Embedding-V1"
            ]
        }
    },
    {
        name: "ChatGLM",
        doc_url: "https://open.bigmodel.cn/dev/howuse/model",
        models: {
            "GLM-4": [
                "glm-4",
                "glm-4v",
            ],
            "ChatGLM-Turbo": [
                "glm-3-turbo",
                "chatglm_turbo",
            ],
            "CharGLM-3": [
                "cogview-3",
            ],
            "CogView-3": [
                "cogview-3",
            ],
            "Embedding-2": [
                "embedding-2",
                "text_embedding"
            ],
        }
    },
    {
        name: "Aliyun",
        doc_url: "https://help.aliyun.com/zh/dashscope/product-overview/?spm=a2c4g.11186623.0.0.ab39e0f6skm3UG",
        models: {
            "Chat": [
                "qwen-turbo",
                "qwen-plus",
                "qwen-max",
                "qwen-max-0403",
                "qwen-max-0107",
                "qwen-max-1201",
                "qwen-max-longcontext",
            ],
            "VL": [
                "qwen-vl-plus",
                "qwen-vl-max",
            ],
            "Embdding": [
                "text-embedding-v1"
            ],
            "Audio": [
                "qwen-audio-turbo"
            ]
        }
    },
    {
        name: "iFLYTEK",
        doc_url: "https://xinghuo.xfyun.cn/sparkapi",
        models: {
            "V1": [
                "SparkDesk-v1.1",
            ],
            "V2": [
                "SparkDesk-v2.1",
            ],
            "V3": [
                "SparkDesk-v3.1",
                "SparkDesk-v3.5"
            ],
        }
    },
    {
        name: "360",
        doc_url: "https://ai.360.com/open",
        models: [
            "360GPT_S2_V9",
            "embedding-bert-512-v1",
            "embedding_s1_v1",
            "semantic_similarity_s1_v1"
        ]
    },
    {
        name: "Tencent",
        doc_url: "https://cloud.tencent.com/document/product/1729/97731",
        models: [
            "hunyuan",
            "hunyuan-pro",
            "hunyuan-standard",
            "hunyuan-lite",
            "hunyuan-embedding",
        ]
    },
    {
        name: "Midjourney Proxy",
        models: [
            "midjourney"
        ]
    },
    {
        name: "MiniMax",
        doc_url: "https://www.minimaxi.com/document",
        models: {
            "Text": [//官网的不带 “-chat”
                "abab5.5",
                "abab5.5s",
                "abab6",
                "abab5.5-chat",
                "abab5.5s-chat",
                "abab6-chat"
            ],
            "Sound": [
                "speech-02"
            ]
        }
    },
    {
        name: "Baichuan",
        doc_url: "https://platform.baichuan-ai.com/docs",
        models: [
            "Baichuan-NPC-Turbo",
            "Baichuan-NPC-Lite",
            "Baichuan2-Turbo",
            "Baichuan2-Turbo-192k",
            "Baichuan-Text-Embedding"
        ]
    },
    {
        name: "Moonshot",
        doc_url: "https://platform.moonshot.cn/docs",
        models: [
            "moonshot-v1-8k",
            "moonshot-v1-32k",
            "moonshot-v1-128k"
        ]
    },
    {
        name: "Mixtral",
        doc_url: "https://docs.mistral.ai",
        models: [
            "open-mistral-7b",
            "open-mixtral-8x7b",
            "open-mixtral-8x22b",
            "mistral-small-latest",
            "mistral-medium-latest",
            "mistral-large-latest",
            "mistral-embed",
        ]
    },
    {
        name: "Meta",
        doc_url: "https://llama.meta.com",
        models: {
            "LLaMA 3": [
                "llama-3-8b",
                "llama-3-70b",
            ],
            "LLaMA 2": [
                "llama-2-70b",
                "llama-2-13b",
                "llama-2-7b",
            ],
            "Code LLaMA": [
                "code-llama-34b",
                "code-llama-13b",
                "code-llama-7b",
                "codellama-70b-instruct",
            ],
        }
    },
    {
        name: "Sonar",
        models: [
            "llama-3-sonar-small-32k-online",
            "llama-3-sonar-small-32k-chat",
            "llama-3-sonar-large-32k-online",
            "llama-3-sonar-large-32k-chat",
            "sonar-small-online",
            "sonar-medium-online",
            "sonar-small-chat",
            "sonar-medium-chat",
        ]
    },
    {
        name: "LLaVA",
        models: {}
    },
    {
        name: "DBRX",
        models: {}
    },
    {
        name: "01.AI",
        doc_url: "https://www.lingyiwanwu.com",
        models: [
            "yi-34b-chat-0205",
            "yi-34b-chat-200k",
            "yi-vl-plus",
        ]
    },
    {
        name: "Suno",
        models: {
            "Chat": [
                "suno-v3"
            ],
            "Proxy": [
                "chirp-v3-0",
                "chirp-v2-xxl-alpha"
            ]
        }
    },
    {
        name: "Pika Labs",
        models: ["domo-video-to-video"]
    },
    {
        name: "Domo AI",
        models: ["domo-img-to-video"]
    },
];

export const TREE_MODELS_OPTIONS = convertModelsMapToTreeOptions(MODELS_MAP);

export const MODELS_OPTIONS = convertModelsMapToOptions(MODELS_MAP);