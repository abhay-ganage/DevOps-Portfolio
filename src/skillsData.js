/**
 * Professional Skill Set Data Structure
 * Categorized into professional DevOps & Cloud Engineering domains
 */

export const skillCategories = [
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    subtitle: "Scalable cloud architecture & system administration",
    skills: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      },
      {
        name: "Amazon EC2",
        icon: "https://api.iconify.design/logos:aws-ec2.svg"
      },
      {
        name: "Amazon S3",
        icon: "https://api.iconify.design/logos:aws-s3.svg"
      },
      {
        name: "Amazon RDS",
        icon: "https://api.iconify.design/logos:aws-rds.svg"
      },
      {
        name: "Amazon VPC",
        icon: "https://api.iconify.design/logos:aws-vpc.svg"
      },
      {
        name: "AWS IAM",
        icon: "https://api.iconify.design/logos:aws-iam.svg"
      },
      {
        name: "Linux (RHEL / Ubuntu)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
      },
      {
        name: "Networking (DNS, Subnets)",
        icon: "https://api.iconify.design/lucide:network.svg?color=%232563EB"
      }
    ]
  },

  {
    id: "containers-orchestration",
    title: "Containers & Orchestration",
    subtitle: "Microservices packaging, runtime & cluster deployment",
    skills: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "Docker Compose",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
      },
      {
        name: "Kind (Kubernetes in Docker)",
        icon: "https://api.iconify.design/logos:kubernetes.svg"
      }
    ]
  },

  {
    id: "cicd-automation",
    title: "CI/CD & Infrastructure as Code",
    subtitle: "Automated pipelines, GitOps & declarative provisioning",
    skills: [
      {
        name: "Terraform",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
      },
      {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
      },
      {
        name: "GitLab CI/CD",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
      },
      {
        name: "Git & GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "ArgoCD",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg"
      },
      {
        name: "Ansible",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg"
      }
    ]
  },

  {
    id: "scripting-languages",
    title: "Scripting & Programming",
    subtitle: "Infrastructure automation, CLI utilities & glue code",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "Shell / Bash Scripting",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg"
      }
    ]
  },

  {
    id: "monitoring-observability",
    title: "Monitoring & Observability",
    subtitle: "Metrics collection, alerting dashboards & log aggregation",
    skills: [
      {
        name: "Prometheus",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg"
      },
      {
        name: "Grafana",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
      },
      {
        name: "AWS CloudWatch",
        icon: "https://api.iconify.design/logos:aws-cloudwatch.svg"
      }
    ]
  },

  {
    id: "databases-storage",
    title: "Databases & Storage",
    subtitle: "Relational persistence & scalable cloud object stores",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "Amazon S3",
        icon: "https://api.iconify.design/logos:aws-s3.svg"
      },
      {
        name: "Amazon RDS",
        icon: "https://api.iconify.design/logos:aws-rds.svg"
      }
    ]
  }
];

export const fallbackSvgIcon = `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717A%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M12%202L2%207l10%205%2010-5-10-5zM2%2017l10%205%2010-5M2%2012l10%205%2010-5%22%2F%3E%3C%2Fsvg%3E`;
